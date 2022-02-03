// Printing elements in Array with starting letter as a vouwel
let Okay = {
    a : {
        b : {
            c : {
                d : ["Apple", "Ishaan", "String", "Push"]
            }
        }
    }
}

for (let i = 0; i < Okay.a.b.c.d.length; i++)
{
    if (Okay.a.b.c.d[i][0] == 'A' || Okay.a.b.c.d[i][0] == 'E' || Okay.a.b.c.d[i][0] == 'I' || Okay.a.b.c.d[i][0] == 'O' || Okay.a.b.c.d[i][0] == 'U')
    {
        console.log(Okay.a.b.c.d[i]);
    }
}