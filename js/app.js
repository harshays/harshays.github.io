function getAbstractElement(button) {
  if (!button) {
    return null;
  }

  const controlledId = button.getAttribute("aria-controls");
  const fallbackId = button.id ? button.id.replace("p", "abs") : "";
  const abstractId = controlledId || fallbackId;
  return abstractId ? document.getElementById(abstractId) : null;
}

function toggleAbstract(button) {
  const abstractElement = getAbstractElement(button);
  if (!button || !abstractElement) {
    return;
  }

  const isOpen = abstractElement.style.display !== "none";
  abstractElement.style.display = isOpen ? "none" : "block";
  button.setAttribute("aria-expanded", String(!isOpen));
}

function toggleCardAbstract(card) {
  if (!card) {
    return;
  }

  const button = card.querySelector(".abstract-button");
  toggleAbstract(button);
}

function highlightDiv(id) {
  if (!id) {
    return;
  }

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.classList.remove("is-highlighted");
  // Force reflow so repeated hash jumps retrigger the animation.
  void element.offsetWidth;
  element.classList.add("is-highlighted");
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderPublication(publication) {
  const publicationId = escapeAttribute(publication.id || "");
  const abstractId = `abs-${publicationId}`;
  const publicationTitle = publication.title || "";
  const linkButtons = (publication.links || [])
    .map((link) => {
      const label = escapeAttribute(link.label || "");
      const href = escapeAttribute(link.href || "#");
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="paper-button">${label}</a>`;
    })
    .join("");

  const abstractButton = publication.abstractHtml
    ? `<button id="p-${publicationId}" class="paper-button abstract-button" type="button" aria-expanded="false" aria-controls="${abstractId}" aria-label="Toggle abstract for ${escapeAttribute(publicationTitle)}">abstract</button>`
    : "";

  const abstractSection = publication.abstractHtml
    ? `<div id="${abstractId}" class="paper-abstract" style="display: none;"><blockquote>${publication.abstractHtml.trim()}</blockquote></div>`
    : "";

  return `
    <div class="paper-div" id="${publicationId}" aria-label="Paper: ${escapeAttribute(publicationTitle)}">
      <a class="paper-title" target="_blank" rel="noopener noreferrer" href="${escapeAttribute(publication.href || "#")}">${escapeAttribute(publicationTitle)}</a>
      <p class="paper-info hidden-xs">${(publication.infoDesktopHtml || "").trim()}</p>
      <p class="paper-info hidden-sm hidden-md hidden-lg">${(publication.infoMobileHtml || "").trim()}</p>
      <div class="paper-buttons">${linkButtons}${abstractButton}</div>
      ${abstractSection}
    </div>
  `;
}

function renderPublications() {
  const publicationsContainer = document.getElementById("publications-list");
  if (!publicationsContainer || !Array.isArray(window.PUBLICATIONS)) {
    return;
  }

  publicationsContainer.innerHTML = window.PUBLICATIONS
    .map((publication) => renderPublication(publication))
    .join("");

  publicationsContainer
    .querySelectorAll(".paper-info a, .paper-abstract a")
    .forEach((anchor) => {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPublications();

  const emailIcons = [
    document.getElementById("emailicon1"),
    document.getElementById("emailicon2"),
  ].filter(Boolean);

  emailIcons.forEach((icon, index) => {
    icon.addEventListener("click", (event) => {
      event.preventDefault();
    });

    if (typeof scrambledString === "function") {
      const objName = `emailIconScramble${index + 1}`;
      // Decode base64 email at runtime: aGFyc2hheS5yc2hhaEBnbWFpbC5jb20= -> harshay.rshah@gmail.com
      const decodedEmail = atob("aGFyc2hheS5yc2hhaEBnbWFpbC5jb20=");
      window[objName] = new scrambledString(
        icon,
        objName,
        decodedEmail,
        Array.from({ length: decodedEmail.length }, (_, i) => i),
        '<i class="fas fa-envelope-square fa-1x"></i>'
      );
    }
  });

  document.querySelectorAll(".abstract-button").forEach((button) => {
    const abstractElement = getAbstractElement(button);
    if (!abstractElement) {
      return;
    }

    const isOpen = abstractElement.style.display !== "none";
    button.setAttribute("aria-expanded", String(isOpen));

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleAbstract(button);
    });
  });

  document.querySelectorAll(".paper-div").forEach((card) => {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        return;
      }
      toggleCardAbstract(card);
    });

    card.addEventListener("keydown", (event) => {
      if ((event.key !== "Enter" && event.key !== " ") || event.target !== card) {
        return;
      }

      event.preventDefault();
      toggleCardAbstract(card);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const hash = anchor.getAttribute("href").substring(1);
      window.setTimeout(() => {
        highlightDiv(hash);
      }, 0);
    });
  });

  window.addEventListener("hashchange", () => {
    highlightDiv(window.location.hash.substring(1));
  });

  if (window.location.hash) {
    highlightDiv(window.location.hash.substring(1));
  }
});
