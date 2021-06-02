const test_block = extend(Conveyor, "test-block", {
});
test_block.health = 6969;
test_block.description = "super h javascript thing";
test_block.buildVisibility = 'shown'
test_block.category = 'defense'

//gonna steal steal from gold mod lol h
const boostEffect = extend(StatusEffect, "boostEffect", {});
boostEffect.speedMultiplier = 6;
