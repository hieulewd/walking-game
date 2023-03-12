import { path1, path2, path3, path4, path5, path6, path7, path8, path9, path10 } from '../assets/images'

export const scenes = [
  {
    imgSrc: path1,
    name: 'path1',
    goTo: ['path2'],
    areas: [
      {
        id: 'path2',
        shape: 'poly',
        href: '#',
        coords: [576, 325, 487, 38, 438, 43, 380, 329]
      }
    ]
  },
  {
    imgSrc: path2,
    name: 'path2',
    goTo: ['path3', 'path1'],
    areas: [
      {
        id: 'path3',
        shape: 'poly',
        href: '#',
        coords: [507, 43, 572, 43, 651, 332, 442, 332]
      },
      {
        id: 'path1',
        href: '#',
        shape: 'poly',
        coords: [1357, 255, 1082, 300, 1148, 328, 1553, 332]
      }
    ]
  },
  {
    imgSrc: path3,
    name: 'path3',
    goTo: ['path4', 'path2'],
    areas: [
      {
        id: 'path4',
        shape: 'poly',
        coords: [146, 4, 285, 8, 485, 311, 169, 313]
      },
      {
        id: 'path2',
        shape: 'poly',
        coords: [1480, 309, 1638, 306, 1633, 166, 1584, 162]
      }
    ]
  },
  {
    imgSrc: path4,
    name: 'path4',
    goTo: ['path5', 'path3'],
    areas: [
      {
        id: 'path5',
        shape: 'poly',
        coords: [351, 313, 568, 307, 611, 11, 517, 6]
      },
      {
        id: 'path3',
        shape: 'poly',
        coords: [1533, 75, 1514, 75, 1476, 315, 1618, 309]
      }
    ]
  },
  {
    imgSrc: path5,
    name: 'path5',
    goTo: ['path6', 'path4'],
    areas: [
      {
        id: 'path6',
        shape: 'poly',
        coords: [432, 9, 368, 6, 257, 275, 410, 275]
      },
      {
        id: 'path4',
        shape: 'poly',
        coords: [1497, 96, 1531, 94, 1557, 274, 1439, 279]
      }
    ]
  },
  {
    imgSrc: path6,
    name: 'path6',
    goTo: ['path5', 'path7', 'path8'],
    areas: [
      {
        id: 'path5',
        shape: 'poly',
        coords: [267, 156, 353, 162, 431, 348, -1, 337]
      },
      {
        id: 'path7',
        shape: 'poly',
        coords: [866, 352, 1017, 188, 1101, 207, 1054, 345]
      },
      {
        id: 'path8',
        shape: 'poly',
        coords: [1375, 352, 1708, 109, 1806, 122, 1783, 339, 1695, 354]
      }
    ]
  },
  {
    imgSrc: path7,
    name: 'path7',
    goTo: ['path6'],
    areas: [
      {
        id: 'path6',
        shape: 'poly',
        coords: [235, 336, 378, 96, 429, 105, 485, 336]
      }
    ]
  },
  {
    imgSrc: path8,
    goTo: ['path6', 'path9', 'path10'],
    name: 'path8',
    areas: [
      {
        id: 'path6',
        shape: 'poly',
        coords: [519, 311, 587, 164, 634, 172, 670, 302]
      },
      {
        id: 'path9',
        shape: 'poly',
        coords: [1380, 113, 1352, 102, 1237, 304, 1367, 307]
      },
      {
        id: 'path10',
        shape: 'poly',
        coords: [1635, 298, 1708, 119, 1731, 121, 1791, 300]
      }
    ]
  },
  {
    imgSrc: path9,
    name: 'path9',
    goTo: ['path10', 'path8'],
    areas: [
      {
        id: 'path10',
        shape: 'poly',
        coords: [248, 164, 176, 159, 54, 340, 206, 340]
      },
      {
        id: 'path8',
        shape: 'poly',
        coords: [941, 179, 890, 183, 930, 340, 1017, 332, 941, 179]
      }
    ]
  },
  {
    imgSrc: path10,
    name: 'path10',
    goTo: ['path8', 'path9'],
    areas: [
      {
        id: 'path8',
        shape: 'poly',
        coords: [706, 140, 567, 141, 516, 320, 639, 324]
      },
      {
        id: 'path9',
        shape: 'poly',
        coords: [1099, 153, 1047, 147, 804, 317, 979, 325]
      }
    ]
  }
]

export enum ButtonPosition {
  Right = 'right',
  Left = 'left'
}
