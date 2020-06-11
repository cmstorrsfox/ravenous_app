const apiKey = '9Qpdp-8t7mkFJbHj54sQjsshIhcLfyUnMlDi6fRc9o3-5TZkHHmg4rT0o5kHk-YRrW5FdIPRjSHup4k-zPUVG9oiblvU5oXFo5y2bUnmCN0OQSN66tALwThjkuLhXnYx//API Key - 9Qpdp-8t7mkFJbHj54sQjsshIhcLfyUnMlDi6fRc9o3-5TZkHHmg4rT0o5kHk-YRrW5FdIPRjSHup4k-zPUVG9oiblvU5oXFo5y2bUnmCN0OQSN66tALwThjkuLhXnYx';

const yelp = {

    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_src,
                        name: business.name,
                        address: {
                            address1: business.location.address1,
                            address2: business.location.address2,
                            address3: business.location.address3,
                        },
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
