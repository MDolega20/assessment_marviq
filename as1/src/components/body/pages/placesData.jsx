// wiadomosc do rafala
// trzeba usupelnic adress = slowny adres lokalizacji
//  url = link prowadzacy do lokalizacji na mapach google

const placesList = [
    {
        name: "Plantacja 1",
        position: {
            lat: 54.589976,
            lng: 17.9081243
        },
        description: "22.12.2019 11.00 - 15.00",
        type: ["plant"],
        rav_info: "W pobliżu: Łęczyce https://maps.app.goo.gl/VrDBVKFoMQusdD5F6 Miejscowość Świetlino",
        address: "Świetlino, Łęczyce niedlaeko Strzelnicy KSCI",
        url: "https://www.google.com/maps/place/54%C2%B035'23.9%22N+17%C2%B054'37.1%22E/@54.589976,17.9081243,17z/data=!3m1!4b1!4m6!3m5!1s0!7e2!8m2!3d54.5899758!4d17.9103129"
        
    },
    {
        name: "Plantacja 2",
        position: {
            lat: 54.160924,
            lng: 18.942816
        },
        description: "21.12.2019 11.00 - 15.00",
        type: ["plant"],
        rav_info: "https://www.google.com/maps/place/Pr%C4%99gowo+%C5%BBu%C5%82awskie+8,+82-230+Pr%C4%99gowo+%C5%BBu%C5%82awskie/@54.160065,18.9416802,15.75z/data=!4m8!1m2!2m1!1zUHLEmWdvd28gxbt1xYJhd3NraWUgOCwgODItMjMwIFByxJlnb3dvIMW7dcWCYXdza2ll!3m4!1s0x46fd5d49c701a81d:0xc06c47bc2fb7d659!8m2!3d54.161052!4d18.943584",
        address: "Pręgowo Żuławskie 8, 82-230 Pręgowo Żuławskie",
        url: "https://www.google.com/maps/place/Pr%C4%99gowo+%C5%BBu%C5%82awskie+8,+82-230+Pr%C4%99gowo+%C5%BBu%C5%82awskie/@54.160065,18.9416802,15.75z/data=!4m8!1m2!2m1!1zUHLEmWdvd28gxbt1xYJhd3NraWUgOCwgODItMjMwIFByxJlnb3dvIMW7dcWCYXdza2ll!3m4!1s0x46fd5d49c701a81d:0xc06c47bc2fb7d659!8m2!3d54.161052!4d18.943584"
    },
    {
        name: "Plantacja 3",
        position: {
            lat: 53.8664042,
            lng: 18.3832936
        },
        description: "",
        type: ["plant"],
        rav_info: "https://www.google.pl/maps/place/53.866462,+18.383315/@53.8664042,18.3832936,226m/data=!3m1!1e3!4m13!1m7!3m6!1s0x47028fbf3ff5bcb9:0x4f08420bb038116f!2s83-240+Bietowo!3b1!8m2!3d53.8706429!4d18.3838126!3m4!7e2!8m2!3d53.8664615!4d18.3833152",
        address: "Bietowo Lubichowo, 83-240",
        url: "https://www.google.pl/maps/place/53%C2%B051'59.1%22N+18%C2%B022'59.9%22E/@53.8664042,18.3810996,670m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.8664042!4d18.3832936"
    },
    {
        name: "Stoisko 1",
        position: {
            lat: 54.5504827,
            lng: 18.5087932
        },
        description: "14.12.2019 - 24.12.2019 24/7",
        type: ["sell"],
        rav_info: "https://www.google.pl/maps/place/54%C2%B033'02.1%22N+18%C2%B030'32.8%22E/@54.5504827,18.5087932,75m/data=!3m1!1e3!4m14!1m7!3m6!1s0x46fda688da13192f:0xe9c4a731388a8ef1!2sAdmira%C5%82a+J%C3%B3zefa+Unruga,+Gdynia!3b1!8m2!3d54.5536965!4d18.4983282!3m5!1s0x0:0x0!7e2!8m2!3d54.5505695!4d18.5091018",
        address: "Gdynia Obłuże ul. Admirała Józefa Unruga 81-191",
        url: "https://www.google.pl/maps/place/54%C2%B033'01.7%22N+18%C2%B030'31.7%22E/@54.5504827,18.5065992,659m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d54.5504827!4d18.5087932"
    },
    {
        name: "Stoisko 2",
        position: {
            lat: 54.548167,
            lng: 18.4424606
        },
        description: "13.12.2019 - 24.12.2019 24/7",
        type: ["sell"],
        rav_info: "https://www.google.pl/maps/place/54.548167,+18.442634/@54.5480873,18.4424606,55m/data=!3m1!1e3!4m13!1m7!3m6!1s0x46fda43f30cd0c6b:0xb37ab56fb507621a!2sCisowa,+81-006+Gdynia!3b1!8m2!3d54.548979!4d18.4403561!3m4!7e2!8m2!3d54.5481673!4d18.4426339",
        address: "Gdynia ul. Chylońska 249, 81-006",
        url: "https://www.google.pl/maps/place/54%C2%B032'53.4%22N+18%C2%B026'32.9%22E/@54.548167,18.4402666,659m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d54.548167!4d18.4424606"
    },
    {
        name: "Stoisko 3",
        position: {
            lat: 54.4676175,
            lng: 18.4895605
        },
        description: "10.12.2019 - 24.12.2019 24/7",
        type: ["sell"],
        rav_info: "https://www.google.pl/maps/place/54.467943,+18.488897/@54.4676175,18.4895605,225m/data=!3m1!1e3!4m13!1m7!3m6!1s0x46fda1aa901121bd:0x8fc40f52da77d514!2sFikakowo,+Gdynia!3b1!8m2!3d54.4673919!4d18.4848377!3m4!7e2!8m2!3d54.4679432!4d18.4888967",
        address: "Gdynia Fikakowo, 81-572",
        url: "https://www.google.pl/maps/place/54%C2%B028'03.4%22N+18%C2%B029'22.4%22E/@54.4676175,18.4873665,660m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d54.4676175!4d18.4895605"
    },
    {
        name: "Stoisko 4",
        position: {
            lat: 54.4974105,
            lng: 18.4383566
        },
        description: "12.12.2019 - 24.12.2019 24/7",
        type: ["sell"],
        rav_info: "https://www.google.pl/maps/place/54%C2%B029'51.8%22N+18%C2%B026'21.0%22E/@54.4974105,18.4383566,221m/data=!3m1!1e3!4m13!1m6!3m5!1s0x46fda16168b64e67:0xe49ec0e8965e2cf3!2zU29rw7PFgmthIFppZWxlbmlzeg!8m2!3d54.4936234!4d18.4404016!3m5!1s0x0:0x0!7e2!8m2!3d54.4977282!4d18.4391772",
        address: "Gdynia pętla autobusowa Chwarzno Sokółka, 81-577",
        url: "https://www.google.pl/maps/place/54%C2%B029'50.7%22N+18%C2%B026'18.1%22E/@54.4974105,18.4361626,660m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d54.4974105!4d18.4383566"
    },
    {
        name: "Stoisko 5",
        position: {
            lat: 54.4898096,
            lng: 18.4251846
        },
        description: "11.12.2019 - 24.12.2019 24/7",
        type: ["sell"],
        rav_info: "https://www.google.pl/maps/place/54%C2%B029'24.0%22N+18%C2%B025'30.1%22E/@54.4898096,18.4251846,111m/data=!3m1!1e3!4m9!1m2!2m1!1swiczlino!3m5!1s0x0:0x0!7e2!8m2!3d54.4899902!4d18.4250251",
        address: "Gdynia ul. Wiczlińska 87, 81-577",
        url: "https://www.google.pl/maps/place/54%C2%B029'23.3%22N+18%C2%B025'30.7%22E/@54.4898096,18.4229906,660m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d54.4898096!4d18.4251846"
    },
];

export default placesList;
