const apiKey = 'pJFALKeuCJvEATiAmRH2acc-7rtAE4fL9WZQ6bUGblrCdWtszly8z1GtzEVefu5BuUJ50d9tzYfD9dv3wX7tqUaNao7t3HwifiJ7TlA8Hmhyl5K9cn6DmX1cufnhXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`},
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count,


                    }
                })
            }
        })
    }

}

export default Yelp;
