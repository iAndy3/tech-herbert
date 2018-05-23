export const MAP_WIDTH = 13;
export const MAP_HEIGHT = 13;

export const TILE_HEIGHT = 55;
export const TILE_WIDTH = 80; 
	
export const KEYS = {
	TOP: 38,
	RIGHT: 39,
	BOTTOM: 40,
	LEFT: 37
}

export const TILES = {
	0: {
		type: 'floor',
		x: 0,
		y: 0,
		w: 80,
		h: 55
	},
	1: {
		type: 'wall',
		x: 160,
		y: 0,
		w: 80,
		h: 55
	},	
	2: {
		type: 'finish',
		x: 80,
		y: 0,
		w: 80,
		h: 55
	},
	3: {
		type: 'player',
		x: 0,
		y: 55,
		w: 80,
		h: 47
	},
	4: {
		type: 'player',
		x: 80,
		y: 55,
		w: 80,
		h: 47
	},
	5: {
		type: 'player',
		x: 160,
		y: 55,
		w: 80,
		h: 47
	},
	6: {
		type: 'player',
		x: 240,
		y: 55,
		w: 80,
		h: 47
	}
};

export const MAP = [
	1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,0,0,0,0,0,0,0,1,0,0,0,1,
	1,1,1,1,1,1,1,0,1,0,1,0,1,
	1,0,0,0,1,0,0,0,1,0,1,2,1,
	1,0,1,1,1,0,1,1,1,0,1,1,1,
	1,0,1,0,0,0,1,0,0,0,0,0,1,
	1,0,1,0,1,1,1,1,1,1,1,0,1,
	1,0,0,0,1,0,0,0,0,0,0,0,1,
	1,0,1,1,1,1,1,0,1,1,1,0,1,
	1,0,1,0,0,0,1,0,1,0,1,0,1,
	1,0,1,0,1,0,1,0,1,0,1,0,1,
	1,0,0,0,1,0,0,0,1,0,0,0,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,
]


// export const MAP = [
// 	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
// 	1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,
// 	1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,
// 	1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,
// 	1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,
// 	1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,
// 	1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
// 	1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,
// 	1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,
// 	1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,
// 	1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,
// 	1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,
// 	1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,
// 	1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,
// 	1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,
// 	1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,
// 	1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,
// 	1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,2,0,0,1,0,1,
// 	1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,
// 	1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,
// 	1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,
// 	1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,
// 	1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,
// 	1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,
// 	1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,
// 	1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,
// 	1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,
// 	1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,
// 	1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,
// 	1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,
// 	1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,
// 	1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
// 	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
// ]

// https://codepen.io/iAndy3/pen/aGVYJZ