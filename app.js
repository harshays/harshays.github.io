function get(url) {
    return new Promise(function(success_cb, error_cb) {
        var http = new XMLHttpRequest();
        http.open('GET', url)

        http.addEventListener('load', function() {
            if (http.status < 400) {
                success_cb(http.responseText);
            }
            else {
                error_cb(new Error(http.status));
            }
        })

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
        <div class='col-md-8'> \
            <p>{{description}}</p> \
        </div> \ ";


var filter = ['harshays.gitub.io', 'website', 
              'hh-personal-sites', 'learn',
              'solutions', 'scripts', 'harshays.github.io',
              'weighin'];

function changeNodeText(node, text) {
    node.innerHTML = text;
}

function append(node, repo) {
    if (filter.indexOf(repo['name']) > -1) {
        return;
    }
    var info = {
        'name': repo['name'],
        'url' : repo['homepage'] || repo['html_url'],
        'description' : repo['description']
    };
    var project_div  = document.createElement('div');
    project_div.className = 'row project-row';
    var innerhtml = Mustache.to_html(project_template, info);
    project_div.innerHTML = innerhtml;
    node.appendChild(project_div);
}

window.onload = function() {
    var repo_url = 'https://api.github.com/users/harshays/repos?sort=pushed';
    var projects_div = document.querySelector('.projects');

    get(repo_url).then(function(data) {
        var node = document.querySelector('.gh_change');
        data = JSON.parse(data);
        data.forEach(function(repo) {
            append(projects_div, repo);
        });
    }, function(err) {
        var node = document.querySelector('.gh_change');
        changeNodeText(node, "Most of them are on <a href='https://www.github.com/harshays'>Github</a>");
    });
};