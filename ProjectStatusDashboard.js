//Object to retrieve data
//and create pie charts
function ProjectStatusDashboard() {
    var that = this;
    var rallyDataSource = new rally.sdk.data.RallyDataSource('__WORKSPACE_OID__', '__PROJECT_OID__',
            '__PROJECT_SCOPING_UP__', '__PROJECT_SCOPING_DOWN__');

    //Private function to perform a query
    //and create a pie from the results
    function showPie(chartDiv, artifactType, artifactAttribute, title, colors) {
        var config = {
            type: artifactType,
            attribute: artifactAttribute,
            title: title,
            height: 200,
            width: 250,
            colors: colors
        };

        var pieChart = new rally.sdk.ui.PieChart(config, rallyDataSource);
        pieChart.display(chartDiv);
    }

    //Public function to display the tasks pie
    this.showTaskPie = function(element) {
        showPie(element,
                "Task",
                "State",
                "Tasks",
                {
                    "Completed" : "#6AB17D",
                    "Defined" : "#5C9ACB"
                }
        );
    };

    //Public function to display the user story pie
    this.showUserStoryPie = function(element) {
        showPie(element,
                "Hierarchical Requirement",
                "Schedule State",
                "User Stories",
                {
                    "Accepted" : "#6AB17D",
                    "Idea" : "#ACACAC",
                    "Defined" : "#E57E3A",
                    "In-Progress" : "#E5D038",
                    "Completed" : "#5C9ACB"
                }
        );
    };

    //Public function to display the test pie
    this.showTestPie = function(element) {
        showPie(element,
                "Test Case",
                "Last Verdict",
                "Test Cases",
                {
                    "Pass": "#6AB17D",
                    "Fail" : "#F47168",
                    "Error" : "#E57E3A",
                    "Inconclusive" : "#ACACAC",
                    "Blocked" : "#E5D038"
                }
        );
    };

    //Public function to display the defect pie
    this.showDefectPie = function(element) {
        showPie(element,
                "Defect",
                "State",
                "Defects",
                {
                    "Closed": "#6AB17D",
                    "Submitted" : "#5C9ACB",
                    "Open" :  "#F47168",
                    "Fixed" : "#E5D038",
                    "Verifying" : "#B5D8EB",
                    "Unable To Reproduce" : "#ACACAC"
                }
        );
    };


    return that;
}