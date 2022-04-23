namespace Command{
    interface BlogPost{
        execute(params: any): any;
    }

    class BlogUtility {
       static titleToSlug() {}
       static dateToHumanize() {}
       static getMostViewedPosts() {}
       static getFeaturedPosts() {}
       static getMonetizedPosts() {}
    }

    class SaveBlogPost implements BlogPost {
        execute() {
            BlogUtility.titleToSlug()
            this.save()
        }

        protected save(){
            // menyimpan ke database
        }
    }

    class UpdateBlogPost implements BlogPost {
        execute() {
            BlogUtility.titleToSlug()
            this.update()
        }

        protected update(){
            // update ke database
        }
    }

    class GetBlogPost implements BlogPost {
        execute(singlePost: boolean) {
            BlogUtility.dateToHumanize();
            
            if (singlePost) {
                this.getPost()
            }else {
                this.getPosts()
            }
        }

        protected getPost(){
            // mengambil 1 data dari database
        }

        protected getPosts(){
            // mengambil banyak data dari database
        }
    }
}