import {Pagination} from "../components/uikit/Pagination";
import PostCardsViews from "../components/PostCardsViews";
import {useFetch} from "../hooks";
import {PostApi} from "../api/";


const Post = () => {
    const getPosts = useFetch(PostApi.getPosts);

    const requestPosts = (page: number) => {
        return getPosts({ page })
    };

    return (<div>
        <Pagination
            pages={5}
            requestElements={requestPosts}
            Views={PostCardsViews}
        />
    </div>)
}

export default Post;