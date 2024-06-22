document.addEventListener("DOMContentLoaded", () => {
    const train1 = [
        ["Tokyo", "-", "6:00"],
        ["Shinagawa", "6:07", "6:08"],
        ["Shin-Yokohama", "6:20", "6:21"],
        ["Odawara", "6:40", "6:45"],
        ["Atami", "=", "6:55"],
        ["Mishima", "7:05", "-"]
    ];

    const scheduleDiv = document.getElementById("schedule");

    train1.forEach((station, index) => {
        // Create station div
        const stationDiv = document.createElement("div");
        stationDiv.className = "station";

        // Create station name div
        const stationNameDiv = document.createElement("div");
        stationNameDiv.className = "station-name";
        stationNameDiv.textContent = station[0];
        stationDiv.appendChild(stationNameDiv);

        // Create times div
        const timesDiv = document.createElement("div");
        timesDiv.className = "times";

        const time1Div = document.createElement("div");
        time1Div.className = "time";
        time1Div.textContent = station[1];
        timesDiv.appendChild(time1Div);

        const time2Div = document.createElement("div");
        time2Div.className = "time";
        time2Div.textContent = station[2];
        timesDiv.appendChild(time2Div);

        stationDiv.appendChild(timesDiv);

        // Append station div to schedule div
        scheduleDiv.appendChild(stationDiv);

        // Add separator if not the last station
        if (index < train1.length - 1) {
            const separatorDiv = document.createElement("div");
            separatorDiv.className = "separator";
            separatorDiv.textContent = "|";
            scheduleDiv.appendChild(separatorDiv);
        }
    });
});
