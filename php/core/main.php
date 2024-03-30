<?php

include "./cnxInterna.php";

class CRUD {
    private $conn;

    public function __construct($host, $username, $password, $database) {
        $this->conn = new mysqli($host, $username, $password, $database);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function create($query, $data) {
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param(str_repeat('s', count($data)), ...$data);
        
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function read($query) {
        $result = $this->conn->query($query);
        $rows = [];

        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
        }

        return $rows;
    }

    public function update($query, $data) {
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param(str_repeat('s', count($data)), ...$data);
        
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function delete($query, $data) {
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param(str_repeat('s', count($data)), ...$data);
        
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function __destruct() {
        $this->conn->close();
    }
}
