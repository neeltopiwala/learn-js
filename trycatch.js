

// try{
//     console.log("main try")


//     console.log("main try2")

// }catch{
//     console.log("main CATCH")
// }finally {

//    console.log("main finally")
// }
// console.log("main")

// function func() {

//   try {
//     return 1;
//     console.log("hello")

//   } catch (err) {
//     /* ... */
//   } finally {
//     console.log( 'finally' );
//   }
// }

// console.log( func() );



// async function loadDashboard() {
//   try {
//     // 1. OUTER TRY: Critical operation
//     console.log("Fetching core user profile...");
//     // const user = await fetchUser(userId); // If this fails, go to outer catch
//     // ihdiuids;

//     try {
//       // 2. INNER TRY: Optional/risky sub-task
//       console.log("Fetching optional analytics...");
//     //   const analytics = await fetchAnalytics(userId); 
//     hello;
//       console.log("Analytics loaded:");
//     } catch (innerError) {
//       // 3. INNER CATCH: Handle local failure without crashing everything
//       console.warn("Analytics failed, but we can still show the profile.");
//       throw new Error(innerError)
//       // We don't rethrow here, so the dashboard continues loading
//     }

//     console.log("Dashboard ready for:");

//   } catch (outerError) {
//     // 4. OUTER CATCH: Handle critical failures
//     console.error("CRITICAL ERROR: Could not load the dashboard at all.", outerError.message);
//   }
// }

// loadDashboard()


//  function loadDashboard() {
//   try {
//     // 1. OUTER TRY: Critical operation
//     console.log("Fetching core user profile...");
//     fidsff
//     return "hello"
//   } catch (outerError) {
//     // 4. OUTER CATCH: Handle critical failures
//     console.log("CRITICAL ERROR: Could not load the dashboard at all.", outerError.message);
//     throw new Error("hello")
//   }finally  {
//     // return "in final"
//     throw new Error("final")
//   }
// }

// console.log(loadDashboard())


