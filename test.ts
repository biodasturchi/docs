interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
}

function getPosts(arg: Post): void {
  console.log(arg.title);
}
