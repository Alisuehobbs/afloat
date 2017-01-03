app.controller("DashboardController", function($scope, $cookies, $location, CorrelationService) {

    const cookie = $cookies.getObject('loggedIn')
    $scope.firstName = cookie.firstName

    CorrelationService.getMoods(cookie.id).then(function(moods) {
        $scope.moods = moods.data
        getDate($scope.moods)
    })

    function getDate(moodsArray) {
        let todayDate = moment()
        let today = []
        let week = []
        let year = []
        for (var i = 0; i < moodsArray.length; i++) {
            if (moment(moodsArray[i].updated_at).isSame(todayDate, 'day')) {
                today.push(moodsArray[i].rating)
            } else if (moment(moodsArray[i].updated_at).isSame(todayDate, 'week')) {
                week.push(moodsArray[i].rating)
            } else if (moment(moodsArray[i].updated_at).isSame(todayDate, 'year')) {
                year.push(moodsArray[i].rating)
            }
        }
        setScope(today, week, year)
    }

    function setScope(today, week, year) {
      $scope.day = {
        type: 'line',
        series: [{
          values: today
        }]
      }

      $scope.week = {
        type: 'line',
        series: [{
          values: week
        }]
      }

      $scope.year = {
        type: 'line',
        series: [{
          values: year
        }]
      }
    }

    $scope.setChartScope = function(input) {
        if (input == "day") {
          $scope.myJson = $scope.day
        } else if (input == "week") {
          $scope.myJson = $scope.week
        } else {
          $scope.myJson = $scope.year
        }
    }


})
