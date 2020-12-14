const apiKey = '';

export async function search(term, location, sortBy) {
  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  const yelpBaseUrl = 'https://api.yelp.com/v3/businesses/search';
  try {
    const response  = await fetch(`${corsAnywhere}${yelpBaseUrl}?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}
