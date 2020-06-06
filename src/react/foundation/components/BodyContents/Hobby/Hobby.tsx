import * as React from 'react';
import '../GlobalTopic/GlobalTopic.css';

const Hobby = () => {
  return (
    <section className="body_main">
      <a id="hobby">
        <header className="body_main_header">
          <h2 className="body_main_title">Hobby</h2>
        </header>
      </a>
      <div className="body_main_contents">
        <ul  id="hobby_slide" className="body_main_contents_list">
          <li className="body_main_contents_list_colum">
            <img className="body_main_contents_list_colum_img" src="./img/hobby1.webp" loading="lazy" />
            <span className="body_main_contents_list_colum_text">
              自宅の近くのカフェのモーニングです。<br />
              美味しいコーヒーを飲みながらよく作業をしたり読書をしたりしています。
            </span>
          </li>
          <li className="body_main_contents_list_colum">
            <img className="body_main_contents_list_colum_img" src="./img/hobby2.webp" loading="lazy" />
            <span className="body_main_contents_list_colum_text">
              学生の頃に大好きなアーティスト、「WANIMA」のライブに行きました。
            </span>
          </li>
        </ul>
        <div className="pointer">
          <span className="hobby_select current"></span >
          <span className="hobby_select"></span>
        </div>

        <p className="body_main_contents_text">
          カフェに行ったり、スポーツをしたり、音楽を聴いたりと色々趣味があります。
        </p>
        <p className="body_main_contents_text">
          上の写真（左）は自宅の近くのカフェなのですが、落ち着いた雰囲気で美味しいコーヒーを飲みながらよく作業や読書をしています。
          たまごサンドがモーニングで大好きなメニューだったのですが、最近無くなってしまい少しショックを受けています、、笑
        </p>
        <p className="body_main_contents_text">
          音楽を聴くのも好きで、大好きなアーティストの「WANIMA」のライブに学生の頃行きました（写真右）。自分の好きな歌を歌って盛り上がれたのでより一層好きになりました。
          「WANIMA」以外にもよく邦楽のロックバンドをよく聴きます。
        </p>
        <p className="body_main_contents_text">
          また、スポーツをするのも大好きなので、休みの日には会社の人たちとフットサルをしたり、別のコミュニティで学生の頃にやっていたハンドボールをしたりしています。
          スポーツは観るのも大好きなので、よくサッカー観戦をしたり、野球観戦をしたりしています。
        </p>
      </div>
    </section>
  )
}

export default Hobby
