import React from "react";

function App() {
  const videos = [
    {
      id: 1,
      title: "React Tutorial for Beginners",
      channel: "Code Academy",
      views: "1.2M views",
      time: "2 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Build a YouTube Clone in React",
      channel: "Dev World",
      views: "850K views",
      time: "1 week ago",
      thumbnail:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      id: 3,
      title: "JavaScript Crash Course",
      channel: "Programming Hub",
      views: "500K views",
      time: "3 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: 4,
      title: "Learn React Hooks",
      channel: "Frontend Master",
      views: "920K views",
      time: "5 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ];

  return (
    <div style={styles.app}>
      <header style={styles.navbar}>
        <div style={styles.logoSection}>
          <span style={styles.menu}>☰</span>
          <h2 style={styles.logo}>
            You<span style={{ color: "red" }}>Tube</span>
          </h2>
        </div>

        <input
          type="text"
          placeholder="Search"
          style={styles.searchBar}
        />

        <button style={styles.signInBtn}>Sign In</button>
      </header>

      <div style={styles.mainContainer}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <p>🏠 Home</p>
          <p>🔥 Trending</p>
          <p>📺 Subscriptions</p>
          <p>🎵 Music</p>
          <p>🎮 Gaming</p>
          <p>📰 News</p>
        </aside>

        {/* Videos */}
        <section style={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} style={styles.card}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={styles.thumbnail}
              />

              <div style={styles.videoInfo}>
                <h3 style={styles.videoTitle}>{video.title}</h3>

                <p style={styles.channel}>{video.channel}</p>

                <p style={styles.meta}>
                  {video.views} • {video.time}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0f0f0f",
    color: "white",
    minHeight: "100vh",
  },

  navbar: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    backgroundColor: "#202020",
    position: "sticky",
    top: 0,
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  menu: {
    fontSize: "24px",
    cursor: "pointer",
  },

  logo: {
    margin: 0,
  },

  searchBar: {
    width: "40%",
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #444",
    backgroundColor: "#121212",
    color: "white",
    outline: "none",
  },

  signInBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
  },

  mainContainer: {
    display: "flex",
  },

  sidebar: {
    width: "220px",
    backgroundColor: "#181818",
    padding: "20px",
    height: "calc(100vh - 60px)",
  },

  videoGrid: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },

  card: {
    backgroundColor: "#202020",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "0.3s",
  },

  thumbnail: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  videoInfo: {
    padding: "10px",
  },

  videoTitle: {
    fontSize: "18px",
    marginBottom: "8px",
  },

  channel: {
    color: "#aaa",
    marginBottom: "5px",
  },

  meta: {
    color: "#777",
    fontSize: "14px",
  },
};

export default App;