// Frequency of Each element in Array
let Okay = {
    Arr : [1, 2, 2, 1, 1, 4, 5, 5, 5, 5]
}

for (let i = 0; i < Okay["Arr"].length; i++)
{
    let frequency = 0;
    for (let j = 0; j < Okay["Arr"].length; j++)
    {
        if (Okay["Arr"][i] == Okay["Arr"][j])
        {
            frequency++;
        }
    }
    console.log(`Frequency of ${Okay["Arr"][i]} = ${frequency}`);
}