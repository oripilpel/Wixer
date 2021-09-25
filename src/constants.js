import { utilService } from "./services/util.service";

export const SIDEBAR_SECTION = "sidebarSection"
export const SIDEBAR_INNERSECTION = "sidebarInnersection"
export const SIDEBAR_COLUMN = "sidebarColumn"
export const SIDEBAR_ITEM = "sidebarItem";
export const SECTION = "section";
export const INNERSECTION = "innersection";
export const COLUMN = "column";
export const COMPONENT = "component";

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
    type: SIDEBAR_SECTION,
    component: {
      type: SECTION,
      cmps: [
        {
          type: COLUMN,
          id: utilService.makeId(),
          style: { flexGrow: 1 },
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

      ],
      style: { backgroundColor: '#101010' }
    }
  },

];
