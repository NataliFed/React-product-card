
import { usePosts } from "./hooks"
import { AddPostPopup, PostList } from './components'
import { Pagination } from "./components/Pagination";

export const HomeFeature = () => {
    const { products, onChangePagination, pagination } = usePosts();

    return (<div>
        <AddPostPopup />
        <PostList products={products} />
        <Pagination onChange={onChangePagination} pagination={pagination} />
    </div>

    )
}
