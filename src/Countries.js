import daScore from "./daScore"
import kukiScore from "./kukiScore"
import uniScore from "./uniScore"


let countries = [{name: "Albania", flag: "al", link: "https://www.youtube.com/watch?v=nrjFhjpm7D8&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=1"},
    {name:"Armenia", flag: "am", link: "https://www.youtube.com/watch?v=_6xfmW0Fc40&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=2"},
    {name:"Australia", flag: "au", link: "https://www.youtube.com/watch?v=tJ2IaHxCvdw&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=3"},
    {name:"Austria", flag: "at", link: "https://www.youtube.com/watch?v=Kqda15G4T-4&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=4"},
    {name:"Azerbaijan", flag: "az", link: "https://www.youtube.com/watch?v=NNhAk4rVgNc&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=5"},
    {name:"Belgium", flag: "be", link: "https://www.youtube.com/watch?v=WCe9zrWEFNc&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=6"},
    {name:"Croatia", flag: "hr", link: "https://www.youtube.com/watch?v=xTBrVNZtnys&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=7"},
    {name:"Cyprus", flag: "cy", link: "https://www.youtube.com/watch?v=8q5QozrtEPA&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=8"},
    {name:"Czechia", flag: "cz", link: "https://www.youtube.com/watch?v=5DbRldMKFUU&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=9"},
    {name:"Denmark", flag: "dk", link: "https://www.youtube.com/watch?v=6ekwBrQ_Ol4&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=10"},
    {name:"Estonia", flag: "ee", link: "https://www.youtube.com/watch?v=zY6RbPaTNUc&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=11"},
    {name:"Finland", flag: "fi", link: "https://www.youtube.com/watch?v=aaIxsEPoS28&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=12"},
    {name:"France", flag: "fr", link: "https://www.youtube.com/watch?v=tfoOop2HXxQ&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=13"},
    {name:"Georgia", flag: "ge", link: "https://www.youtube.com/watch?v=blMwY8Jabyk&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=14"},
    {name:"Germany", flag: "de", link: "https://www.youtube.com/watch?v=8b5gcgXcWgk&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=15"},
    {name:"Greece", flag: "gr", link: "https://www.youtube.com/watch?v=uTYalXf184A&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=16"},
    {name:"Iceland", flag: "is", link: "https://www.youtube.com/watch?v=JG4JxXWzHGw&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=17"},
    {name:"Ireland", flag: "ie", link: "https://www.youtube.com/watch?v=ZGRXRrlIspY&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=18"},
    {name:"Israel", flag: "il", link: "https://www.youtube.com/watch?v=lJYn09tuPw4&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=19"},
    {name:"Italy", flag: "it", link: "https://www.youtube.com/watch?v=psiytW9Or2s&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=20"},
    {name:"Latvia", flag: "lv", link: "https://www.youtube.com/watch?v=p8FNO0DtBng&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=21"},
    {name:"Lithuania", flag: "lt", link: "https://www.youtube.com/watch?v=GyMivcJfm34&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=22"},
    {name:"Luxembourg", flag: "lu", link: "https://www.youtube.com/watch?v=HFAkz6ac7BM&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=23"},
    {name:"Malta", flag: "mt", link: "https://www.youtube.com/watch?v=l6eS60n4wg8&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=24"},
    {name:"Moldova", flag: "md", link: "https://www.youtube.com/watch?v=Wpwv4ayV2CI&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=25"},
    {name:"Netherlands", flag: "nl", link: "https://www.youtube.com/watch?v=gT2wY0DjYGo&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=26"},
    {name:"Norway", flag: "no", link: "https://www.youtube.com/watch?v=EmmXeF0MvQI&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=27"},
    {name:"Poland", flag: "pl", link: "https://www.youtube.com/watch?v=IhvDkF9XZx0&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=28"},
    {name:"Portugal", flag: "pt", link: "https://www.youtube.com/watch?v=Ty3KGTpisNg&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=29"},
    {name:"San Marino", flag: "sm", link: "https://www.youtube.com/watch?v=9NcAJtfhpWA&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=30"},
    {name:"Serbia", flag: "rs", link: "https://www.youtube.com/watch?v=jm7jy2471vI&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=31"},
    {name:"Slovenia", flag: "si", link: "https://www.youtube.com/watch?v=uWcSsi7SliI&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=32"},
    {name:"Spain", flag: "es", link: "https://www.youtube.com/watch?v=LJFpexlj9Bs&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=33"},
    {name:"Sweden", flag: "se", link: "https://www.youtube.com/watch?v=3MxSrxcojHM&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=34"},
    {name:"Switzerland", flag: "ch", link: "https://www.youtube.com/watch?v=kiGDvM14Kwg&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=35"},
    {name:"Ukraine", flag: "ua", link: "https://www.youtube.com/watch?v=KnjXRNlWpwo&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=36"},
    {name:"United Kingdom", flag: "gb", link: "https://www.youtube.com/watch?v=mvs92WfR8lM&list=PLqvxS3F727iMmZr3i2hwHVuhZd9lxEcFP&index=37"},
]

countries.forEach((c) => {
    c.daScore = daScore[c.name];
    c.kukiScore = kukiScore[c.name];
    c.uniScore = uniScore[c.name];
    c.avgScore = Number(((c.daScore + c.kukiScore + c.uniScore)/3).toFixed(2));
    c.bestScore = Math.min(c.daScore, c.uniScore, c.kukiScore);
})

countries.sort((a, b) => {
    if (a.avgScore !== b.avgScore) {
    return b.avgScore - a.avgScore
} else {
    if(a.bestScore !== b.bestScore){
        return b.bestScore - a.bestScore
    }
} 
    return a.name.localeCompare(b.name);
})

    
export default countries