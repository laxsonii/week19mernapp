import { useQuery } from '@apollo/client';

import { QUERY_ITEMS } from '../utils/queries';

const MenuList = ()=> {
        const { loading, data } = useQuery(QUERY_ITEMS);
      
        // const items = data?.items || [];
        // console.log(loading, data)



    return(
        <div>
            <h1>Welcome to Delicious Site</h1>
        </div>
    )
}

export default MenuList