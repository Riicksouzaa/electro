/**
 * Value: SKILL_ID
 * Text: Name Skill
 * Example to register: { value: 0, text: "Attack Speed" }
 */
export const skillName = [
  { value: 0, text: "Attack Speed" },
  { value: 1, text: "Club" },
  { value: 2, text: "Sword" },
  { value: 3, text: "Axe" },
  { value: 4, text: "Distance" },
  { value: 5, text: "Shielding" },
  { value: 6, text: "Fishing" },
]

/**
 * @initial_id (Number)   =   INITIAL VOCATION ID
 * @last_id    (Number)   =   LAST VOCATION ID
 * @Text       (String)   =   NAME VOCATION
 * The initial_value_id is the 1st id of your vocations, 
 * the last_vocation_id is the last id referring to that vocation, 
 * in ascending order. Example: If my Knight vocation 
 * starts at id 1 and goes up to 9, 
 * my initial_value_id will be 1 and last_vocation_id will be 9.
 * Example to register: { initial_id: 1, last_id: 17, text: "Knight Sample" }
 */
export const vocations = [
  { 
    initial_id: 1, 
    last_id: 17, 
    text: "Dragon_Slayer" 
  }, 
  { 
    initial_id: 18, 
    last_id: 31, 
    text: "Winter" 
  }, 
  { 
    initial_id: 32, 
    last_id: 46, 
    text: "Barbarian" 
  }, 
  { 
    initial_id: 47, 
    last_id: 58, 
    text: "Mage" 
  },
  { 
    initial_id: 59, 
    last_id: 67, 
    text: "Mercenary" 
  },
  { 
    initial_id: 68, 
    last_id: 71, 
    text: "Warrior" 
  },
]

export const sex = [
  { value: 0, text: "Male" },
  { value: 1, text: "Female" }
]

export const routesCommunity = [
  {
    text: "Who is online?",
    to: "/online"
  },
  {
    text: "Lastkills",
    to: "/lastkills"
  },
]

export const routesAccount = [
  {
    text: "Manage account",
    to: "/accounts"
  },
  {
    text: "Create Character",
    to: "/accounts/create-character"
  },
]

export const routesDashboard = [
  {
    icon: 'mdi-home',
    title: 'Home',
    to: '/dashboard',
  },
  {
    icon: 'mdi-view-dashboard-outline',
    title: 'Customize',
    to: '/dashboard/customize'
  },
  {
    icon: 'mdi-newspaper',
    title: 'News',
    to: '/dashboard/news'
  },
  {
    icon: 'mdi-account-multiple',
    title: 'Accounts',
    to: '/dashboard/accounts'
  },
  {
    icon: 'mdi-account-cowboy-hat',
    title: 'Players',
    to: '/dashboard/players'
  },
  {
    icon: 'mdi-khanda',
    title: 'Guilds',
    to: '/dashboard/guilds'
  },
  {
    icon: 'mdi-axe',
    title: 'Items',
    to: '/dashboard/items'
  },
  {
    icon: 'mdi-rodent',
    title: 'Monsters',
    to: '/dashboard/monsters'
  },
  {
    icon: 'mdi-cart',
    title: 'Shop',
    to: '/dashboard/shop'
  },
  {
    icon: 'mdi-text-box-outline',
    title: 'Logs',
    to: '/dashboard/logs'
  },
];