const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function HomePage() {
    return (
      <>
        <title>Welcome</title>
        <div style={styles.container}>
          <h1 style={styles.title}>
             welcome page{' '}
            
          </h1>
        </div>
      </>
    );
  }
  