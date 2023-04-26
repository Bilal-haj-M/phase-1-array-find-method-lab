function superbowlWin(records) {
   const result = records.find(records => records.result === 'W')

   return result ?  result.year : undefined
}