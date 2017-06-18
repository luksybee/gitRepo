

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "unicodeveloper";
        
        $scope.avatar_url = "https://avatars2.githubusercontent.com/u/2946769?v=3";


        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };


        $scope.predicate = '-updated_at';


}]);




/*
{
  "login": "unicodeveloper",
  "id": 2946769,
  "avatar_url": "https://avatars2.githubusercontent.com/u/2946769?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/unicodeveloper",
  "html_url": "https://github.com/unicodeveloper",
  "followers_url": "https://api.github.com/users/unicodeveloper/followers",
  "following_url": "https://api.github.com/users/unicodeveloper/following{/other_user}",
  "gists_url": "https://api.github.com/users/unicodeveloper/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/unicodeveloper/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/unicodeveloper/subscriptions",
  "organizations_url": "https://api.github.com/users/unicodeveloper/orgs",
  "repos_url": "https://api.github.com/users/unicodeveloper/repos",
  "events_url": "https://api.github.com/users/unicodeveloper/events{/privacy}",
  "received_events_url": "https://api.github.com/users/unicodeveloper/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Prosper Otemuyiwa",
  "company": "Unicode Labs, LLC",
  "blog": "http://goodheads.io",
  "location": "Lagos, Nigeria",
  "email": null,
  "hireable": null,
  "bio": "Engineer => Writer => Speaker Community Builder => OSS => Evangelist. Google Developer Expert.",
  "public_repos": 132,
  "public_gists": 64,
  "followers": 984,
  "following": 63,
  "created_at": "2012-12-02T21:53:16Z",
  "updated_at": "2017-06-16T09:06:33Z"
}
*/
