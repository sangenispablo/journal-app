export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.sierraclub.org/sites/www.sierraclub.org/files/blog-earth-day-iStock-1139567211_0.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aliquid consequatur, laborum animi hic quidem, illum dolorum
        </p>
      </div>
      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>28</h4>
      </div>
    </div>
  );
};
