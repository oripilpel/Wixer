import { utilService } from './services/util.service';

export const SIDEBAR_SECTION = 'sidebarSection'
export const SIDEBAR_INNERSECTION = 'sidebarInnersection'
export const SIDEBAR_COLUMN = 'sidebarColumn'
export const SIDEBAR_ITEM = 'sidebarItem';
export const SECTION = 'section';
export const INNERSECTION = 'innersection';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const SIDEBAR_ITEMS_BASIC = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_INNERSECTION,
    name: 'columns',
    icon: 'ViewColumnIcon',
    component: {
      type: INNERSECTION,
      children: [],
      style: {},
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_COLUMN,
    name: 'column',
    component: {
      type: COLUMN,
      children: [],
      style: {},
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'text',
    icon: 'TextFieldsIcon',
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
    name: 'video',
    icon: 'VideoLibraryIcon',
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
    name: 'image',
    icon: 'InsertPhotoIcon',
    component: {
      type: 'image',
      data: { url: 'https://random.imagecdn.app/150/150' },
      style: {}
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'button',
    icon: 'SmartButtonIcon',
    component: {
      type: 'button',
      data: { txt: 'Click to Change', hoverColor: '#767676' },
      style: {
        borderRadius: '5px',
        border: 'none',
        height: 50,
        minWidth: '150px',
        fontFamily: 'montserrat',
        backgroundColor: '#afafaf'
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    name: 'gmap',
    // icon: 'SmartButtonIcon',
    component: {
      type: 'GMap',
      data: { 
        lat:31.962712994957688, 
        lng:34.91398822780261,
        zoom: 15,
        markerName: 'Ginaton'
      },
      style: {
        height: 200
      }
    }
  },
]

export const SIDEBAR_ITEMS_NAV = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_ITEM,
    component: {
      style: { display: 'flex' },
      type: 'nav',
      data: {
        color: '#000000',
        hoverColor: '#868686',
        links: [
          {
            id: utilService.makeId(),
            txt: 'Reservation'
          },
          {
            id: utilService.makeId(),
            txt: 'Menu'
          },
          {
            id: utilService.makeId(),
            txt: 'About'
          },
          {
            id: utilService.makeId(),
            txt: 'Contact'
          },
        ]
      }
    }
  }
]

export const SIDEBAT_ITEMS_HEADER = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Header1',
    image: 'header1',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      cmps: [
        {
          type: INNERSECTION,
          id: utilService.makeId(),
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'LAWRENCE'
                    },
                    style: {
                      fontSize: '27',
                      color: '#000000',
                      fontFamily: 'forum',
                      letterSpacing: '0.35em'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    style: {
                      display: 'flex',
                      fontFamily: 'raleway',
                      fontSize: 16
                    },
                    type: 'nav',
                    data: {
                      hoverColor: '#868686',
                      color: '#000000',
                      links: [
                        {
                          id: utilService.makeId(),
                          txt: 'Reservation'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'Menu'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'About'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'Contact'
                        }
                      ]
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
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'Order Online',
                      hoverColor: '#534835'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'forum',
                      color: '#eeece2',
                      backgroundColor: '#7c6c50',
                      border: 0,
                      height: 50,
                      width: 150,
                      cursor: 'pointer'
                    }
                  }
                }
              ],
              style: {
                padding: 10,
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
          ],
          style: {
            flexGrow: 1,
            padding: '0 25px',
          },
        }
      ],
      style: {
        backgroundColor: '#FAF8F1',
      }
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Header2',
    image: 'header2',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        backgroundColor: '#000',
        flexGrow: 0,
        padding: 10,
        display: 'flex',
      },
      cmps: [
        {
          type: INNERSECTION,
          id: utilService.makeId(),
          style: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          cmps: [
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [{
                type: COMPONENT,
                id: utilService.makeId(),
                component: {

                  style: {
                    flexGrow: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '180'
                  },
                  type: 'image',
                  data: { url: 'http://res.cloudinary.com/dq6ymh7ev/image/upload/v1632845763/u3wzylxl7s5jn7kdaeqk.svg' }
                }
              }

              ]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
              cmps: [{
                type: COMPONENT,
                id: utilService.makeId(),
                component: {
                  style: {
                    color: '#b09f82',
                    flexGrow: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '34'
                  },
                  type: 'text',
                  data: { txt: '*9996' }
                }
              }]
            },
            {
              type: COLUMN,
              id: utilService.makeId(),
              style: {
                flexGrow: 0,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content'
              },
              cmps: [
                {
                  type: COMPONENT,
                  id: utilService.makeId(),
                  style: {
                    flexGrow: 0,
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  },
                  component: {
                    type: 'image',
                    data: { url: 'http://res.cloudinary.com/dq6ymh7ev/image/upload/v1632845750/slyc5yzyraawpadfejws.svg' }
                  }
                }
              ]
            }, {
              type: COLUMN,
              id: utilService.makeId(),
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    style: {
                      display: 'flex',
                    },
                    type: 'nav',
                    data: {
                      hoverColor: '#f6f6f6',
                      color: '#a19d9d',
                      links: [
                        {
                          id: utilService.makeId(),
                          txt: 'מרצדס ישראל'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'מרצדס לשירותך'
                        },
                        {
                          id: utilService.makeId(),
                          txt: 'דגמים'
                        }
                      ]
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
                alignItems: 'flex-end',
              }
            }
          ]
        }
      ]
    }
  }
]

export const SIDEBAR_ITEMS_SECTIONS = [
  // {
  //   id: utilService.makeId(),
  //   type: SIDEBAR_SECTION,
  //   component: {
  //     type: SECTION,
  //     style: {
  //       backgroundImage: 'url(https://static.wixstatic.com/media/46dc18_0998a8ce1f34483cbe31aec42ff6108f~mv2.jpg/v1/fill/w_1068,h_808,al_c,q_85,usm_0.66_1.00_0.01/46dc18_0998a8ce1f34483cbe31aec42ff6108f~mv2.webp)',
  //       height: 755,
  //       backgroundAttachment: 'fixed',
  //       backgroundPosition: 'center'
  //     },
  //     cmps: []
  //   }
  // },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    image: 'hero3',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        height: 960,
        backgroundColor: '#faf8f1'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            maxWidth: '1060px',
            padding: '0 25px',
            margin: 'auto'
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
                      color: '#090f0f',
                      fontFamily: 'forum',
                      textAlign: 'center',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you." },
                    style: {
                      paddingTop: 40,
                      paddingBottom: 40,
                      fontSize: 16,
                      color: '#090f0f',
                      fontFamily: 'raleway',
                      textAlign: 'center',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'View Menu',
                      hoverColor: '#534835'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'forum',
                      color: '#eeece2',
                      backgroundColor: '#7c6c50',
                      border: 0,
                      padding: '25px 65px',
                      cursor: 'pointer'
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
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'berco',
    image: 'hero2',
    component: {
      id: utilService.makeId(),
      type: SECTION,
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://static.wixstatic.com/media/46dc18_129ba04ade8a4cf3962ccb05b35e57c7~mv2.jpg/v1/fill/w_980,h_880,al_c,q_85,usm_0.66_1.00_0.01/46dc18_129ba04ade8a4cf3962ccb05b35e57c7~mv2.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            maxWidth: '1060px',
            padding: '0 25px',
            margin: 'auto'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                position: 'relative',
                alignItems: 'center',
                backgroundColor: '#faf8f1',
                maxWidth: '600px',
                margin: '60px 0',
                padding: '50px 60px',
                display: 'flex',
                gap: '25px'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'A Fresh and Seasonal Cuisine' },
                    style: {
                      fontSize: 48,
                      color: '#000000',
                      fontFamily: 'forum',
                      textAlign: 'center',
                      maxWidth: '15ch'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.` },
                    style: {
                      maxWidth: '420px',
                      fontSize: 16,
                      color: '#000000',
                      fontFamily: 'raleway',
                      textAlign: 'center',
                      lineHeight: '1.5em'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'About Lawrence',
                      hoverColor: '#534835'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'forum',
                      color: '#eeece2',
                      backgroundColor: '#7c6c50',
                      border: 0,
                      padding: '25px 65px',
                      cursor: 'pointer'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Hero1',
    image: 'hero1',
    component: {
      type: SECTION,
      style: {
        height: 775,
        backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/heritage_1.jpg)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            width: 800,
            backgroundColor: '#000000c7'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                border: '1px solid #9f835e',
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'מורשת' },
                    style: {
                      color: '#9f835e',
                      fontSize: 40,
                      fontFamily: 'Arial'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'המורשת של מרצדס בנץ משתרעת על פני למעלה מ-125 שנים בהם ביססה החברה את מעמדה כאחת מיצרניות הרכב המובילות בעולם. מרצדס בנץ מילאה תפקיד מרכזי בהיסטוריה של תעשיית הרכב והייתה ועודנה חלוצה בתחומי הטכנולוגיה, הבטיחות, העיצוב, הספורט מוטורי והקיימות. ' },
                    style: {
                      color: '#a09d9d',
                      fontSize: 15,
                      marginBottom: 25,
                      fontFamily: 'Arial',
                      textAlign: 'center'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: '< עוד על מורשת מרצדס-בנץ' },
                    style: {
                      color: '#9f835e',
                      fontSize: 15,
                      fontFamily: 'Arial'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'Gallery',
    image: 'gallery',
    component: {
      type: SECTION,
      style: {
        backgroundColor: '#000000',
        backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/general/footer-back.png)'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            alignItems: '',
            paddingTop: 40,
            borderTop: '1px solid #696969'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'TV מרצדס',
                      hoverColor: '#000000'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      backgroundColor: '#000000',
                      height: 60,
                      width: 350,
                      cursor: 'pointer',
                      border: '1px solid #9f835e'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/11306_mercedes_tv_5.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'Stronger than Time- מרצדס G-Class' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/12168_ao_oct_pics_4-1-e1604495033850.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "EQC- It's more than electric. It's a Mercedes" },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_3.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'The new EQB' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_1.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "The all-new EQA- It's more than electric. It's a Mercedes" },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {},
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/2020-06-24_1300-002.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'GLE Coupe- חיית כבישים עם כל האבזור והטכנולוגיה שאפשר לבקש' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/10161_awo_january_banner_atar_avtr_310x190_1-1.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: "Mercedez AMG- לוקח אותך לקצה" },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/11306_mercedes_tv_5.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'GLA- The best Premium compact SUV' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/MBC27200-1-1.jpg' },
                    style: {
                      width: 285
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'מרצדס S Class- רכב הפאר הטוב ביותר בעולם' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            paddingBottom: 40,
            borderBottom: '1px solid #696969'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_4.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'The new E-Class Coupe : Made to be dynamic' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/13644_ao_April_image_2-1.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'E-Class Cabriolet - More then ever' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/ANG.jpg' },
                    style: {}
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'AMG GT Black Series- ספורטיבית ללא פשרות' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'image',
                    data: { url: 'https://www.mercedes-benz.co.il/wp-content/uploads/2020-07-14_1446.jpg' },
                    style: {
                      width: 285
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: { txt: 'GLB- הצורה היפה ביותר של החופש ברכב הפנאי שייקח אותך לעולם של חוויות חדשות' },
                    style: {
                      textAlign: 'right',
                      fontFamily: 'Arial',
                      color: '#9f835e',
                      marginTop: 15,
                      marginBottom: 10
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
];

export const SIDEBAR_ITEMS_FOOTER = [
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'footer1',
    image: 'footer1',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 420,
        backgroundColor: '#090f0f'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            alignSelf: 'center',
            gap: '20px',
            justifyContent: 'space-around',
            width: '1060px',
            padding: '0 25px',
            margin: 'auto'
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
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
                      color: '#faf8f1',
                      fontFamily: 'forum',
                    }
                  }
                },
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: utilService.makeId(),
    type: SIDEBAR_SECTION,
    name: 'footer2',
    image: 'footer2',
    component: {
      type: SECTION,
      id: utilService.makeId(),
      style: {
        backgroundColor: '#000000',
        backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/general/footer-back.png)',
        justifyContent: 'center'
      },
      cmps: [
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            height: 180
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {},
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: 'הידע והנתונים המופיעים באתר זה מתייחסים למגוון דגמים המשווקים במקומות שונים בעולם ומעודכנים למועד הבאת המקור הלועזי לתרגום. ייתכנו הבדלים בין התיאור המובא באתר זה לבין הדגמים המשווקים על-ידי חברתנו, הן מבחינת המפרט הטכני והן מבחינת האביזרים, הציוד והמערכות הנלוות. כמו כן ייתכנו הבדלים בדגם מסויים, בהתאם לשינויים הנעשים מזמן לזמן. חלק מהאביזרים ו/או המערכות המפורטים באתר זה מצוי רק בחלק מדגמי הרכבים, אין בפרסום המובא באתר זה כדי לחייב את היצרן ו/או את החברה בהספקת דגמים שיכללו את כל או חלק מהאביזרים, הציוד והמערכות המתוארים בו והם שומרים לעצמם את הזכות לבטל, להוסיף, לשנות ולשפר, ללא הודעה מוקדמת וללא עידכון באתר זה. התמונות באתר הינן להמחשה בלבד. האתר כפוף לשינוי ללא הודעה מוקדמת. ט.ל.ח.'
                    },
                    style: {
                      color: '#A09D9D',
                      textAlign: 'right'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            backgroundImage: 'url(https://www.mercedes-benz.co.il/wp-content/uploads/social-bg-1.jpg)',
            height: 175
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                alignItems: 'center'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: '.מרצדס-בנץ באינסטגרם',
                    },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'Arial',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'text',
                    data: {
                      txt: '.כל העדכונים, החידושים, האירועים, הדגמים. ',
                    },
                    style: {
                      color: '#ffffff',
                      fontFamily: 'Arial',
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    type: 'button',
                    data: {
                      txt: 'עקבו אחרינו',
                      hoverColor: '#00abec'
                    },
                    style: {
                      fontSize: '16',
                      fontFamily: 'Arial',
                      color: '#ffffff',
                      backgroundColor: '#00abec',
                      border: 0,
                      height: 50,
                      width: 150,
                      cursor: 'pointer'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          id: utilService.makeId(),
          type: INNERSECTION,
          style: {
            alignSelf: 'center',
            backgroundColor: '#000000'
          },
          cmps: [
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                paddingRight: 25,
                borderRight: '1px solid #555'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#ffffff',
                      textAlign: 'right',
                      paddingBottom: 30,
                      fontFamily: 'Arial',
                    },
                    data: {
                      txt: 'מוקד מכירות מרצדס-בנץ 9996*'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#ffffff',
                      textAlign: 'right',
                      paddingBottom: 30,
                      fontFamily: 'Arial',
                    },
                    data: {
                      txt: 'שירות לקוחות: טל. 03-9153030'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial',
                    },
                    data: {
                      txt: 'מדיניות פרטיות'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'תנאי שימוש'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'הצהרת נגישות'
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                paddingRight: 25,
                borderRight: '1px solid #555'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'מדדי זיהום אויר וצריכת דלק'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'מחירון חלפים מרצדס'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'אודות מרצדס-בנץ'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'שירות לקוחות'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'צור קשר'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#a09d9d',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'מגזין מרצדס Star'
                    }
                  }
                }
              ]
            },
            {
              id: utilService.makeId(),
              type: COLUMN,
              style: {
                paddingRight: 25,
                borderRight: '1px solid #555',
                textAlign: 'right'
              },
              cmps: [
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'image',
                    style: {
                      width: 218,
                      height: 100
                    },
                    data: {
                      url: 'https://www.mercedes-benz.co.il/wp-content/themes/mercedes/images/mercedes-logo-forsite.svg'
                    }
                  }
                },
                {
                  id: utilService.makeId(),
                  type: COMPONENT,
                  component: {
                    id: utilService.makeId(),
                    type: 'text',
                    style: {
                      color: '#ffffff',
                      textAlign: 'right',
                      fontFamily: 'Arial'
                    },
                    data: {
                      txt: 'מרצדס בנץ ישראל הוקמה על ידי חברת כלמוביל בשנת 1963, והייתה ליבואנית הראשונה של מכוניות יוקרה בישראל. מרצדס בנץ ישראל היא חלק מחברת כלמוביל שנוסדה בשנת 1936 ונמצאת בבעלות משפחת חרל"פ. קבוצת כלמוביל היא יבואנית הרכב המובילה בישראל הן של כלי רכב פרטיים, והן של כלי רכב מסחריים, משאיות ואוטובוסים לישראל.'
                    }
                  }
                }
              ]
            }
          ]

        }
      ]
    }
  }
]

// const template = {
//   type: SIDEBAR_SECTION,
//   id: utilService.makeId(),
//   component: {
//     type: SECTION,
//     style: {},
//     cmps: [{
//       id: utilService.makeId(),
//       type: INNERSECTION,
//       style: {},
//       cmps: [
//         {
//           id: utilService.makeId(),
//           type: COLUMN,
//           style: {},
//           cmps: [
//             {
//               id: utilService.makeId(),
//               type: 'component',
//               component: {
//                 type: 'text',
//                 data: {
//                   txt: 'Services'
//                 },
//                 style: {
//                   fontSize: 16,
//                   color: '#ffffff',
//                   fontFamily: 'Arial'
//                 }
//               }
//             }
//           ]
//         }
//       ]
//     }]
//   }
// }