// defult/bulletin function
// custom

//defination
//print 1-10
//recursive function use garxum
const toPrint = (n)=> { //n=10            //i=1   
    if (i<=n){          //i<=n => 1 <= 10 true
        console.log(i)   //1
        i++             //i=2
        toPrint(n)      //toPrint(2)
    }
}

let i=1                // i= global
toPrint(1)             // n= 10 as arguement


//database 10000, users table, username

// username = manish
// if username exists => extra number add => unique

// db check if username unique or not
// unique => terminate
// non-unique => username+ number => unique check

// pdf report => publisher application
  // chapter
  //section
     // subsection 
     // subsection
     // subsection

   // subsection
  //section
    // subsection
    const categories = [
        {
            name: "Motor tools & DIY",
            subCat: [
                {
                    name:"Lubricants",
                    subCat: [
                        {
                            name: "oil",
                            subCat: null
                        },
                        {
                            name: "petrol",
                            subCat: null
                        },
                    ]
                },
                {
                    name:"Motorbike",
                    subCat:[
                        {
                            name: "Standard bikes",
                            subCat: [
                                {
                                    name: "Accessories",
                                    subCat: [
                                        {
                                            name: "mirror",
                                            subcat:null
                                        },
                                    ]
                                   
                                }
                            ]
                        },
                        {
                            name: "electrical bike",
                            subCat: null
                        },
                        {
                            name:"scooters",
                            subCat:[
                                {
                                    name: "driver",
                                    subCat:null
                                },
                            ]
                        },
                    ]
                }
            ]
        }
    ]


    // first level => 1st loop
      // second level => 1st loop =>2nd step loop
         // third level => 1st loop =>2nd step loop => thirt step loop
            // forth level => 1st loop =>2nd loop => fourth level loop
/**const printCat= (catList, i = 0)=> {
    if (catList){
        let space ="\t".repeat(i)
        for (let cat of catList){
            console.log(space,cat.name)
            if (cat.subCat){
                i++
                printCat(cat.subCat, i++)
            }
        }
    }
}
printCat(categories)/*
            /* * printCat(cat.subCat)
             * yesle answer lainai aauxa unlike the down one
             * if want spacing the add console.log("\t", cat.name)
             */

for(let cat of categories) {
    console.log(cat.name)
    if(cat.subCat){    // non empty value[]
        for (let cat1 of cat.subCat){
            console.log("\t", cat1.name)
            if (cat1.subCat){
                for(let cat2 of cat1.subCat){
                    console.log("\t\t", cat2.name)
                    if(cat2.subCat){
                        for(let cat3 of cat2.subCat){
                         console.log("\t\t\t", cat3.name)
                         if(cat3.subCat){
                            for(let cat4 of cat3.subCat){
                             console.log("\t\t\t\t", cat4.name)
                             if(cat4.subCat){
                                for(let cat5 of cat4.subCat){
                                 console.log("\t\t\t\t\t", cat5.name)
                                 if(cat5.subCat){
                                    for(let cat6 of cat5.subCat){
                                     console.log("\t\t\t\t\t\t", cat6.name)
                                     if(cat6.subCat){
                                        for(let cat7 of cat6.subCat){
                                         console.log("\t\t\t\t\t\t\t", cat7.name)
                                    }    }
                                }    }
                            }    }
                        }
                        }
                    }
                }
            }
        }
    }
}
}



const document =[
    {
    title:  "chpter-1: intro",
    details: "some text",
    section: [
        {
            title: "section1.1 Introduction",
            details: "some intro",
            section:null
        },
        {
            title:"section 1.2",
            details: "history",
            section:[
                {
                    title: "subsection 1.2",
                    details: "histry timeline",
                    section: null
                }
            ]
        },
        {
            title:"section 1.3 problem statement",
            details:"chapter related problems",
            section:[
                {
                    title: "easy",
                    details:"easy problems",
                    section: null
                },
                {
                    title: "medium",
                    details:"medium probs",
                    section:null
                }}}]

const printDoc= (section, i = 1)=> {
    if (section){
        
        for (let sectionContent of section){
            console.log("\t",repeat(i),sectionContent.title)
            console.log(sectionContent.details)
            printDoc(sectionContent.sections)
            }
        }
    }
for(let chapter of document){
    console.log(chapter.title)
    console.log(chapter.detail)
    // sections
    printDoc(chapter.sections)
    console.log("--------------------------------------------------------------------------------------")
}


