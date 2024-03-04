const MENU_TYPES = ['every', 'some', 'something else'] as const;

export type MenuType = (typeof MENU_TYPES)[number];

console.log(MENU_TYPES); // -> [ 'every', 'some', 'something else' ]

// MenuType is a custom type being declared. MenuType will represent the type of elements contained in the MENU_TYPES array. (typeof MENU_TYPES) refers to the type of the MENU_TYPES array itself, and [number] is used to access a specific element in the array based on its index. So, MenuType will be the union type of all the elements in the MENU_TYPES array.