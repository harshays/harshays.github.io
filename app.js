/*
* Promise to get github repo data
*/
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

/*
* div for description of each project
*/
var project_template = "\
        <div class='col-md-3'> \
            <a href='{{url}}'>{{name}}</a> \
        </div> \
        <div class='col-md-9'> \
            <p>{{description}}</p> \
        </div> \ ";


// do not show these repositories
var filter = ['harshays.gitub.io', 'website',
              'hh-personal-sites', 'learn',
              'solutions', 'scripts', 'harshays.github.io',
              'dotfiles'
              ];

// only show these forked repositories
var fork_filter = ['phrase-mining']

// helper to change node content
function changeNodeText(node, text) {
    node.innerHTML = text;
}

/*
* filter repo. if valid, extract repo info
* and use mustache to display it
*/
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

// setup before promise handline
function setup_before() {
    var container = document.querySelector('.body-container');
    container.style.height = window.innerHeight + "px";
}

// setup after promise handling
function setup_after() {
    document.body.style.display = 'block';
}

window.onload = function() {
    var repo_url = 'https://api.github.com/users/harshays/repos?sort=pushed';
    var gh_err = "Most of my projects are on <a href='https://www.github.com/harshays'>Github</a>"

    var body = document.querySelector('body');
    var node = document.querySelector('.gh_change');
    var projects_div = document.querySelector('.projects');

    setup_before();

    try {
        get(repo_url).then(function(data) {
            data = JSON.parse(data);
            data.forEach(function(repo) {
                append(projects_div, repo);
            });
            setup_after();
        }, function(err) {
            changeNodeText(node, gh_err);
            setup_after();
        });
    }
    catch (err) {
        if (err instanceof ReferenceError) {
            changeNodeText(node, gh_err);
        }
        setup_after();
    }
};
