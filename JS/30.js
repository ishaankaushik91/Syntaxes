let Info = [
    {
        Username : "Ishaan Kaushik",
        Password : "Jai Bholenath"
    },
    {
        Gender : "Male",
        Age : 19
    }
]
let Credentials = [];
let About = [];
let Whole_Guy = [];

for (let i = 0; i < Info.length; i++)
{
    if (i < Info.length / 2)
    {
        Credentials.push(Object.values(Info[i]));
    }
    else
    {
        About.push(Object.values(Info[i]));
    }
}

Whole_Guy.push(Credentials);
Whole_Guy.push(About);
console.log(Whole_Guy);