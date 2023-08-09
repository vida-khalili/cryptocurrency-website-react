import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <div className={classes["loadingio-spinner-ellipsis-dy60k8loykf"]}>
        <div className={classes["ldio-vgh5hi1h3z"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>Loading ... Please wait</div>
    </div>
  );
};

export default Loading;
