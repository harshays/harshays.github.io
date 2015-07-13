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

// filter repo
function filterRepos(repos) {
    return repos.filter(function(repo) {
        var inFilter = filter.indexOf(repo['name']) > -1;
        var inFork = fork_filter.indexOf(repo['name']) > -1;
        var isFork = repo['fork'];

        if (isFork) {
            if (inFork)
                return true;
            return false;
        }

        if (inFilter)
            return false;

        return true;
    });
}

// extract repo key-vals
function extractRepo(repo) {
    return  { 'name': repo['name'],
              'url' : repo['homepage'] || repo['html_url'],
              'description' : repo['description'] 
            };
}

// add repo to dom
function addRepo(info) {
    var $repo = $('<div>', {'class': 'row project_row'});
    $repo.html(Mustache.to_html(project_template, info));
    $('.projects').append($repo);
}

// setup before promise handling
function setup_before() {
    var window_ht = $(window).height();
    $('.body_container').height(window_ht);
}

// setup after promise handling
function setup_after() {
    $('body').fadeIn('fast');
}

$(document).ready(function() {
    var repo_url = 'https://api.github.com/users/harshays/repos?sort=pushed';
    var gh_err = "Most of my projects are on <a href='https://www.github.com/harshays'>Github</a>"
    var $node = $('.gh_change');

    setup_before();

    try {
        get(repo_url).then(
        function(data) {
            var repos = filterRepos(JSON.parse(data));
            repos.forEach(function(repo) {
                var info = extractRepo(repo);
                addRepo(info);
            });
            setup_after();
        },
        function(err) {
            $node.html(gh_err);
            setup_after();
        });
    }
    catch(err) {
        if (err instanceof ReferenceError)
            $node.html(gh_err);
        setup_after();
    }
});

