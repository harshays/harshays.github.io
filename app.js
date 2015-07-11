function get(url) {
    return new Promise(function(success_cb, error_cb) {
        var http = new XMLHttpRequest();
        http.open('GET', url)
        http.addEventListener('load', function() {
            if (http.status < 400)
                success_cb(http.responseText);
            else
                error_cb(new Error(http.status));
        });
        http.addEventListener('error', function() {
            error_cb(new Error());
        });
        http.send();
    });
}

var project_template = "\
        <div class='col-md-3'> \
            <a href='{{url}}'>{{name}}</a> \
        </div> \
        <div class='col-md-9'> \
            <p>{{description}}</p> \
        </div> \ ";


// do not show these
var filter = ['harshays.gitub.io', 'website',
              'hh-personal-sites', 'learn',
              'solutions', 'scripts', 'harshays.github.io',
              'dotfiles'
              ];

// show only these forks
var fork_filter = ['phrase-mining']

function changeNodeText(node, text) {
    node.innerHTML = text;
}

function append(node, repo) {
    if (filter.indexOf(repo['name']) > -1)
        return;

    if (repo['fork'] && fork_filter.indexOf(repo['name']) < 0)
        return;

    var info = { 'name': repo['name'],
                 'url' : repo['homepage'] || repo['html_url'],
                 'description' : repo['description'] };

    var project_div  = document.createElement('div');
    project_div.className = 'row project-row';
    project_div.innerHTML = Mustache.to_html(project_template, info);
    node.appendChild(project_div);
}

window.onload = function() {
    var repo_url = 'https://api.github.com/users/harshays/repos?sort=pushed';
    var gh_err = "Most of my projects are on <a href='https://www.github.com/harshays'>Github</a>"

    var body = document.querySelector('body');
    var node = document.querySelector('.gh_change');
    var projects_div = document.querySelector('.projects');

    try {
        get(repo_url).then(function(data) {
            var node = document.querySelector('.gh_change');
            data = JSON.parse(data);
            data.forEach(function(repo) {
                append(projects_div, repo);
            });
            body.style.display = 'block';
        }, function(err) {
            changeNodeText(node, gh_err);
            body.style.display = 'block';
        });
    }
    catch (err) {
        if (err instanceof ReferenceError) {
            changeNodeText(node, gh_err);
        }
        body.style.display = 'block';
    }
};
