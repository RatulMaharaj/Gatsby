const url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=South%20Africa";

fetch(url,
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "d44a34af09msh87c6734aee1c3f7p14e9e3jsn9dcb321a4dc7"
        }
    })

    .then(response => response.json())
    // .then(data => console.log(JSON.stringify(data)))

    .then(function (data) {

        var confirmed = data["data"]["covid19Stats"][0]["confirmed"];
        var deaths = data["data"]["covid19Stats"][0]["deaths"];
        var recovered = data["data"]["covid19Stats"][0]["recovered"];
        var lastupdate = data["data"]["covid19Stats"][0]["lastUpdate"];

        document.getElementById('confirmed').innerHTML = confirmed;
        document.getElementById('deaths').innerHTML = deaths;
        document.getElementById('recovered').innerHTML = recovered;
        document.getElementById('lastupdate').innerHTML = lastupdate;
    })

    .catch(err => {
        console.log(err);
    });