export const formatDate=(dateString: string):string=>{

  const date = new Date(dateString).toLocaleDateString("en-US",{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
  });


  return date

}

export const capitalizeFirstLetter=(slug: string):string=>{

   if (typeof slug !== "string" || !slug.length)
      return ''

   return slug.charAt(0).toUpperCase() + slug.slice(1)

}

export const makeCategory=(slug: string):string=>{

  if(typeof slug !== "string")
    return ''

  return slug.replace('-',' ')


}