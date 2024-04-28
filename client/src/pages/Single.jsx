import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import editImg from '../images/edit.png'
import deleteImg from '../images/delete.png'

const Single = () => {
    const post = {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
    return (
        <div className="single">
            <div className="content">
                <img src={post.img} alt="" />
                <div className="user">
                    {post.userImg && <img
                        src={post.userImg}
                        alt=""
                    />}
                    <div className="info">
                        <span>{post.username && post.username}</span>
                        {/* <p>Posted {moment(post.date).fromNow()}</p> */}
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`} state={post}>
                            <img src={editImg} alt="" />
                        </Link>
                        <img src={deleteImg} alt="" />
                    </div>
                </div>
                <h1>{post.title}</h1>
                <p
                // dangerouslySetInnerHTML={{
                //     __html: DOMPurify.sanitize(post.desc),
                // }}
                >
                    Consequat sunt adipisicing enim occaecat nulla. Consequat mollit laboris ipsum sint eu laboris. Aute enim reprehenderit incididunt reprehenderit enim id qui officia anim laboris velit. Reprehenderit irure velit non exercitation. Commodo dolore laboris culpa officia incididunt veniam ad velit aliquip adipisicing aliquip proident consequat culpa. Mollit tempor proident voluptate qui do incididunt consequat deserunt. Ipsum do laboris eiusmod anim commodo aute.

                    Sit aute eu tempor aliqua consequat eiusmod cupidatat non consectetur veniam ea quis veniam irure. Aliquip elit non nulla consequat consectetur. Consectetur incididunt non irure pariatur consectetur et dolore sit laboris consectetur minim dolor quis mollit. In irure quis officia officia cupidatat magna laboris quis ipsum. Consectetur ea anim esse consectetur aute mollit non esse.

                    Ad laboris ipsum incididunt ut elit ad eu consequat excepteur nulla. Deserunt ea non aliqua ex ea sint do culpa qui magna. Tempor Lorem ullamco amet labore in ex Lorem deserunt anim officia cupidatat in dolore. Excepteur adipisicing excepteur laborum aliqua voluptate do sint veniam Lorem excepteur tempor minim. Ex enim incididunt sunt id occaecat aliquip. Amet fugiat est nisi cupidatat velit tempor magna magna dolore esse quis nulla ut consequat.

                    Dolor veniam officia nulla est velit qui elit laboris anim ipsum. Et anim veniam quis officia ea duis ex adipisicing ullamco sunt excepteur velit enim. Cupidatat esse voluptate Lorem ex mollit sint proident. Deserunt culpa et nostrud ullamco ea non exercitation officia duis elit sit eu voluptate id. Cillum velit velit elit occaecat. Dolor occaecat ex velit est ex. Enim enim tempor et eiusmod nostrud.

                    Ipsum id quis aute ut culpa cillum tempor dolore sit. Proident occaecat eiusmod ut ullamco nisi proident sunt ad ullamco id. Tempor cupidatat minim irure laborum qui aliquip consectetur voluptate pariatur labore officia officia. Nulla ad ex laboris do fugiat esse nulla cupidatat cillum. Irure excepteur fugiat sint occaecat do eiusmod sint labore excepteur. Aliquip culpa enim esse voluptate pariatur id ex in adipisicing veniam et occaecat ut laboris.

                    Dolor ex culpa fugiat nulla cupidatat dolore aliqua cupidatat sunt ea deserunt ullamco laboris sunt. Adipisicing voluptate eiusmod consequat fugiat quis dolore tempor minim consequat sunt duis nulla consectetur. Enim in non non deserunt. Do laborum minim labore incididunt laboris anim ad qui commodo ea laborum ex. Do cillum ea excepteur proident fugiat velit eu id id dolor commodo elit dolor. Incididunt proident Lorem magna voluptate excepteur et. Ea laborum qui magna enim sit anim irure proident.

                    Nostrud consequat sint pariatur nisi est magna dolore exercitation commodo nostrud eu. Sunt excepteur nulla non Lorem elit in sit cillum aute incididunt nisi. Mollit culpa laborum cupidatat ad qui mollit laborum tempor laboris do ullamco pariatur labore. Et elit id proident quis adipisicing ea consectetur aliqua reprehenderit ad nostrud culpa amet magna. Incididunt minim aliqua Lorem amet minim eiusmod.
                </p>
            </div>
            <Menu />
        </div >
    )
}

export default Single