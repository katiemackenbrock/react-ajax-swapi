import { Link } from 'react-router-dom'

function ShipList(props) {
    let ship = ''

    if (props.starship.length < 1) {
        return (<h1>Loading</h1>)
    } else {
        ship = props.starship.map(starship => (
            <Link
                to={{
                    pathname: '/starship',
                    state: starship
                }}
                key={starship.name}
            >
                {starship.name}
            </Link>
        )
        )
    }
    return (
        <>
            {ship}
        </>
    )
}

export default ShipList