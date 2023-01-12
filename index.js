// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
moveNPC()

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/well.png')).to(600, 400)
move(newItem('assets/sword.png')).to(400, 550)
move(newItem('assets/shield.png')).to(165, 335) 
move(newItem('assets/staff.png')).to(600, 250)

let backGround = document.createElement('img')
backGround.src = 'assets/grass.png'
backGround.style.position = 'fixed'
backGround.style.left = '0px'
backGround.style.bottom = '0px'
backGround.style.width = "100%"
backGround.style.height = "70%"
backGround.style.zIndex = -1;
document.body.append(backGround)

let Sky = document.createElement('img')
Sky.src = 'assets/sky.png'
Sky.style.position = 'fixed'
Sky.style.width = '100%'
Sky.style.height = '30%'
Sky.style.left = '0px'
Sky.style.top = '0px'
Sky.style.zIndex = -1;
document.body.append(Sky)