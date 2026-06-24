🗳️ Blockchain-Based E-Voting System with Face Recognition

A secure and transparent electronic voting system that integrates **Blockchain Technology**, **Face Recognition**, and **OTP Verification** to ensure voter authenticity, prevent election fraud, and maintain vote integrity.

-> Project Overview

Traditional voting systems face challenges such as voter impersonation, vote tampering, lack of transparency, and high operational costs. This project addresses these issues by combining blockchain's immutability with biometric authentication.

The system verifies voters using facial recognition and OTP-based authentication before allowing them to cast a vote. Each vote is securely stored on the blockchain, ensuring transparency, security, and tamper resistance.

---

-> Features
* User Module
- User Registration
- Face Enrollment and Verification
- OTP-Based Authentication
- Secure Login
- Vote Casting
- Vote Confirmation
- Logout Functionality

* 🔐 Security Features
- Face Recognition Authentication
- OTP Verification
- One Person One Vote Enforcement
- Blockchain-Based Vote Storage
- Encrypted Data Storage
- Tamper-Proof Voting Records

* 👨‍💼 Admin Module
- Candidate Management
- Voter Monitoring
- Election Monitoring
- Vote Counting
- Result Generation
- Dashboard Analytics

---
-> 🏗️ System Architecture

1. User Registration
2. Face Capture & Biometric Enrollment
3. OTP Verification
4. Secure Authentication
5. Vote Casting
6. Smart Contract Validation
7. Blockchain Vote Storage
8. Vote Counting & Result Generation

---

-> 🛠️ Technologies Used
* Frontend
- HTML
- CSS
- Bootstrap
- JavaScript

* Backend
- Python
- Flask

 *Database
- SQLite3

* Blockchain
- Ethereum
- Smart Contracts

* Machine Learning
- OpenCV
- Face Recognition
- CNN-Based Face Detection

* Security
- OTP Authentication
- AES Encryption
- SHA-256 Hashing

---

-> Project Structure

```text
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── voting.html
│
├── blockchain/
│   ├── smart_contract.sol
│   └── blockchain_utils.py
│
├── face_recognition/
│   ├── face_capture.py
│   ├── face_train.py
│   └── face_verify.py
│
├── database/
│   └── voting.db
│
├── app.py
├── requirements.txt
└── README.md
```

---

-> Installation
* Clone Repository

```bash
git clone https://github.com/sathwika086/blockchain-e-voting-system
cd blockchain-e-voting-system
```

* Create Virtual Environment

```bash
python -m venv venv
```

* Activate Environment

** Windows

```bash
venv\Scripts\activate
```

** Linux/Mac

```bash
source venv/bin/activate
```
* Install Dependencies

```bash
pip install -r requirements.txt
```

* Run Application

```bash
python app.py
```

---

-> 🔄 Workflow

* Registration
- User enters personal details.
- Face image is captured and processed.
- Face embeddings are stored securely.

* Authentication
- User logs in.
- Face verification is performed.
- OTP is sent and verified.

* Voting
- User selects a candidate.
- Smart contract validates eligibility.
- Vote is stored on blockchain.
- User receives confirmation.

* Administration
- Admin monitors election activities.
- Admin views results and analytics.

---

-> Advantages

- Secure Voter Authentication
- Prevention of Duplicate Voting
- Transparent Election Process
- Tamper-Proof Vote Storage
- Reduced Election Costs
- Improved Trust and Accountability
- Enhanced Accessibility

---

-> Future Enhancements

- Deepfake Detection
- Liveness Detection
- Mobile Application Support
- Multi-Factor Biometric Authentication
- Cloud-Based Deployment
- National-Level Election Scalability
- Zero-Knowledge Proof Integration

---

-> Research Domains

- Blockchain Technology
- Cyber Security
- Artificial Intelligence
- Machine Learning
- Biometric Authentication
- Digital Governance

---

-> Author

Sathwika Thangallapally

Final Year Project – Blockchain-Based E-Voting System with Face Recognition

---

-> License

This project is developed for educational and research purposes.
