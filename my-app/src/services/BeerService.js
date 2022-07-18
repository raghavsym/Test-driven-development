export async function getAllBeers() {
    try{
        const response = await fetch(`http://localhost:3000/status/getAllBeerCurrentTemperature`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          })
        const res = await response.json();
        return res.data;
    }catch(error) {
        return [];
    }
    
}