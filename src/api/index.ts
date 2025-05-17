const BASE_URL = 'http://3.37.144.218:8080';

interface Post {
  postId: number;
  title: string;
  content: string;
  place: string;
  status: boolean;
  category: string
  latitude: number;
  longitude: number;
  likeCount: number;
}

const getAllPostList = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/post`);

    if (!response.ok) {
      throw new Error(`HTTP 오류 발생: ${response.status}`);
    }

    const data = await response.json();
    return data as Post[];
  } catch (error) {
    console.error(`fetch failed`);
    throw error;
  }
};

export { Post, getAllPostList };