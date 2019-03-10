export const FILTER_GROUPS = [
  { name: 'sort', items: [ 'publish', 'views', 'collectCount' ] },
  { name: 'duration', items: [ 'nolimit', 'less_than_4', 'between_5_10', 'more_than_10' ] }
]
export const FILTER_DURATION_DEFINATION = {
  less_than_4: [ 0, 5 ],
  between_5_10: [ 5, 10 ],
  more_than_10: [ 10 ]
}
