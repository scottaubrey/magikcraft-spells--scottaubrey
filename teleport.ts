const magik = magikcraft.io;

function teleport(name) {
    const there = magik.memento.getItem(name);
    if (there)	{
        magik.ianuae(there)
    } 
}
