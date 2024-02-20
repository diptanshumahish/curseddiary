import Image from "next/image";
import { ServerProps } from "../../../contracts/ServerComponents";
import { getBlog, getBlogData } from "./data";
import styles from "../../../styles/blog.module.css";
import assets from "@/components/services/assets";
import RenderBlock from "@/components/NotionRender/RenderBlock";
import moment from "moment";
import { ArrowLeft, Calendar, Clock, Loader2, Mail } from "lucide-react";
import ReadTimeClient from "./ReadTimeClient";
import MorePosts from "@/components/common/MorePosts";
import { Suspense } from "react";
import Link from "next/link";
export default async function BlogRenderComponent(props: ServerProps<"id">) {
  const [blog, { title, url, desc, date, user, aboutAuthor, tags, type }] =
    await Promise.all([getBlog(props.params.id), getBlogData(props.params.id)]);

  return (
    <div className={styles.blogContainer}>
      <div className="w-full lg:h-[80vh] h-[70vh] relative">
        <Link
          href={type === "real" ? `/real-stories` : `/stories`}
          className="absolute lg:top-[15%] top-[12%] left-[5%] text-yellow-100 border-b pointer-events-auto cursor-pointer z-10 flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back
        </Link>
        <Image
          unoptimized
          src={url}
          alt={title}
          height={1080}
          width={1920}
          placeholder="blur"
          blurDataURL={assets.blur_img}
          className="mb-4 w-full h-full object-cover rounded-md"
        />
        <div className="bg-gradient-to-b from-transparent to-theme-bg absolute inset-0  w-full" />
        <div className="absolute bottom-[5%] flex flex-col gap-2 left-[5%] right-[5%] text-white">
          <h1 className="text-4xl">{title}</h1>

          <p className="opacity-60 lg:max-w-[60%]">{desc}</p>
          <div className="flex items-center gap-4">
            <Calendar size={18} />
            <span>
              <span className="opacity-40">written on </span>
              <b className="opacity-100">
                {moment(date).format("dddd DD MMMM, YYYY")}
              </b>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Clock size={18} /> <ReadTimeClient />{" "}
            <span className="opacity-50">to read this</span>
          </div>
        </div>
      </div>
      <div className={styles.articleContainer}>
        <article id="main_blog">
          {blog && <RenderBlock blockMap={blog.results} />}
        </article>
      </div>
      <div className="px-[5%] pb-[5%] flex flex-col text-white lg:w-[30%]">
        <div className="flex flex-col gap-2">
          <span className="opacity-50">ABOUT AUTHOR</span>
          <span className="text-lg">{user.name}</span>
          <span className="text-sm opacity-50">{aboutAuthor}</span>
          <a
            className=" flex items-center gap-2 underline"
            href={`mailto:${user.email}?cc=diptanshumahish2016@gmail.com&subject=Contacing%20regarding%20the%20story%20at%20Cursed%20Diary&body=Hi%20${user.name}%2C%0D%0AI%20just%20read%20your%20story.%0D%0A%0D%0A%0D%0AThank%20you`}
          >
            Contact Author <Mail size={18} />
          </a>
        </div>
      </div>
      <Suspense fallback={<Loader2 />}>
        <MorePosts type={type} tag={tags} active_id={props.params.id} />
      </Suspense>
    </div>
  );
}
