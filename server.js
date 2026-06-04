const express = require('express');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// API Endpoint to get Allure summary data
app.get('/api/summary', (req, res) => {

const summaryPath = path.join(
__dirname,
'allure-report',
'widgets',
'summary.json'
);

if (fs.existsSync(summaryPath)) {

```
try {

  const data = fs.readFileSync(
    summaryPath,
    'utf8'
  );

  res.json({
    available: true,
    data: JSON.parse(data)
  });

} catch (err) {

  res.status(500).json({
    available: false,
    error: 'Failed to parse report summary'
  });
}
```

} else {

```
res.json({
  available: false,
  message:
    'No test execution report has been compiled yet.'
});
```

}
});

// Serve Allure Report
app.use(
'/report',
express.static(
path.join(__dirname, 'allure-report')
)
);

// Serve Dashboard Frontend
app.use(
express.static(
path.join(__dirname, 'public')
)
);

app.listen(PORT, () => {

console.log(
`Express dashboard server running on port ${PORT}`
);

console.log(
`Dashboard: http://localhost:${PORT}`
);

console.log(
`Allure Report: http://localhost:${PORT}/report`
);
});
