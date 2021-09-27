import { utilService } from './services/util.service';

export const SIDEBAR_SECTION = 'sidebarSection'
export const SIDEBAR_INNERSECTION = 'sidebarInnersection'
export const SIDEBAR_COLUMN = 'sidebarColumn'
export const SIDEBAR_ITEM = 'sidebarItem';
export const SECTION = 'section';
export const INNERSECTION = 'innersection';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const SIDEBAR_ITEMS = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_INNERSECTION,
    component: {
      type: INNERSECTION,
      children: [],
      style: {},
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_COLUMN,
    component: {
      type: COLUMN,
      children: [],
      style: {},
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'text',
      data: { txt: 'Some text' },
      style: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Arial'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'input',
      data: {
        placeholder: 'placeholder',
        label: 'label'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'name',
      content: 'Some name'
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'email',
      content: 'Some email'
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'video',
      data: { videoId: 'VvU27gvAK40' },
      style: {
        width: 100,
        height: 100,
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'image',
      data: { url: 'https://random.imagecdn.app/150/150' },
      style: {}
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      type: 'button',
      data: { txt: 'Click to Change' },
      style: {
        borderColor: '#FF5722',
        borderRadius: '5px',
        color: '#FF5722'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    component: {
      type: SECTION,
      cmps: [
        {
          type: COLUMN,
          id: utilService.makeId(),
          style: { flexGrow: 0 },
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'LOGO' },
                style: {
                  fontSize: 32,
                  color: '#fff',
                  fontFamily: 'montserrat',
                  backgroundColor: '#101010'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: { alignItems: 'flex-end' },
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                display: 'flex',
                alignItems: 'flex-end'
              },
              cmps: [{
                id: utilService.makeId(),
                type: COMPONENT,
                component: {
                  type: 'text',
                  data: { txt: 'Home' },
                  style: {
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'montserrat',
                    backgroundColor: '#101010'
                  }
                }
              }]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                display: 'flex',
                alignItems: 'flex-end'
              },
              cmps: [{
                id: utilService.makeId(),
                type: COMPONENT,
                component: {
                  type: 'text',
                  data: { txt: 'About' },
                  style: {
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'montserrat',
                    backgroundColor: '#101010'
                  }
                }
              }]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                display: 'flex',
                alignItems: 'flex-end'
              },
              cmps: [{
                id: utilService.makeId(),
                type: COMPONENT,
                component: {
                  type: 'text',
                  data: { txt: 'News' },
                  style: {
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'montserrat',
                    backgroundColor: '#101010'
                  }
                }
              }]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                display: 'flex',
                alignItems: 'flex-end'
              },
              cmps: [{
                id: utilService.makeId(),
                type: COMPONENT,
                component: {
                  type: 'text',
                  data: { txt: 'Blog' },
                  style: {
                    fontSize: 16,
                    color: '#fff',
                    fontFamily: 'montserrat',
                    backgroundColor: '#101010'
                  }
                }
              }]
            },
          ]
        }

      ],
      style: { backgroundColor: '#101010' }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    component: {
      type: SECTION,
      cmps: [
        {
          type: 'innersection',
          id: utilService.makeId(),
          cmps: [
            {
              type: 'column',
              id: 'gBiDzgP62L',
              cmps: [
                {
                  id: 'nSZb4hMgFy',
                  type: 'component',
                  component: {
                    type: 'image',
                    data: {
                      url: 'http://res.cloudinary.com/dq6ymh7ev/image/upload/v1632573662/pfq3wsiqojei5zoo32sw.png'
                    },
                    style: {
                      width: 100
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: 'column',
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: {
                      txt: '*9996'
                    },
                    style: {
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'Arial'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: 'column',
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'image',
                    data: {
                      url: 'http://res.cloudinary.com/dq6ymh7ev/image/upload/v1632575338/xxybpycbkwa6y375vc8o.svg'
                    },
                    style: {
                      width: 100
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: 'column',
              id: utilService.makeId(),
              cmps: [],
              style: {
                padding: 10,
                flexGrow: 5,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: 'column',
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: {
                      txt: 'Israel'
                    },
                    style: {
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'Arial'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: 'column',
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: {
                      txt: 'Services'
                    },
                    style: {
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'Arial'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: 'column',
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: {
                      txt: 'Models'
                    },
                    style: {
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'Arial'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 1,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
          ],
          style: {
            padding: 10,
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      ],
      style: {
        backgroundColor: '#000000'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    component: {
      type: SECTION,
      style: {
        height: 960,
        backgroundColor: '#faf8f1'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {
            flexGrow: 4,
            alignItems: 'center',
            justifyContent: 'center',
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: 'Made With Love. Simply Delicious' },
                style: {
                  fontSize: 48,
                  color: 'rgb(9,15,15)',
                  fontFamily: 'Arial',
                  textAlign: 'center',
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'text',
                data: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you." },
                style: {
                  paddingTop: 40,
                  paddingBottom: 40,
                  fontSize: 16,
                  color: 'rgb(9,15,15)',
                  fontFamily: 'Arial'
                }
              }
            },
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'button',
                data: { txt: 'View Menu' },
                style: {
                  borderColor: '#7c6c50',
                  backgroundColor: '#7c6c50',
                  borderRadius: '0',
                  color: 'rgb(250, 248, 241)'
                }
              }
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: COLUMN,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COMPONENT,
              component: {
                type: 'image',
                data: { url: 'https://static.wixstatic.com/media/46dc18_3487b934a84548e090e13f5ce1bf08ad~mv2.jpg/v1/fill/w_450,h_800,al_c,q_80,usm_0.66_1.00_0.01/46dc18_3487b934a84548e090e13f5ce1bf08ad~mv2.webp' },
                style: {}
              }
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'footer',
    component: {
      type: SECTION,
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 420,
        backgroundColor: 'rgb(9,15,15)'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            width: 870
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'flex-start'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Address' },
                    style: {
                      fontSize: 32,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: '500 Terry Francois Street' },
                    style: {
                      fontSize: 22,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'San Francisco, CA 94158' },
                    style: {
                      fontSize: 22,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'flex-start'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Opening Hours' },
                    style: {
                      fontSize: 32,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Mon - Fri: 11am - 10pm' },
                    style: {
                      fontSize: 22,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Sat - Sun: 11am - 12am' },
                    style: {
                      fontSize: 22,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'flex-start'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'Contact Us' },
                    style: {
                      fontSize: 32,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: 'info@mysite.com' },
                    style: {
                      fontSize: 22,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: 'component',
                  component: {
                    type: 'text',
                    data: { txt: '123 456 6780' },
                    style: {
                      fontSize: 22,
                      color: 'rgb(250,248,241)',
                      fontFamily: 'Arial'
                    }
                  }
                },
              ]
            }
          ]
        }
      ]
    }
  }
];
