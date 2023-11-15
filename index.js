function distanceFromHqInBlocks(street)
{
    let disBlocks = Math.abs(42 - street)

    return disBlocks
}

function distanceFromHqInFeet(street)
{
    let disFeet =  distanceFromHqInBlocks(street) * 264
    
    return disFeet
}

function distanceTravelledInFeet(start, destination)
{
    let disTrav = Math.abs(distanceFromHqInFeet(destination) - distanceFromHqInFeet(start))

    return disTrav
}

function calculatesFarePrice(start, destination)
{
    let disTravel = distanceTravelledInFeet(start, destination)
    let fare

    if (disTravel < 400)
    {
        fare = 0

        return fare
    }

    else if (disTravel >= 400 && disTravel <= 2000)
    {
        fare = (disTravel - 400) * .02

        return fare
    }

    else if (disTravel > 2000 && disTravel < 2500)
    {
        fare = 25

        return fare
    }

    else
    {
        fare = 'cannot travel that far'

        return fare
    }
}
