package main


import (
"encoding/json"
"net/http"
)


func main(){
http.HandleFunc("/api/articles", func(w http.ResponseWriter, r *http.Request){
w.Header().Set("Content-Type","application/json")
json.NewEncoder(w).Encode([]map[string]string{{"id":"1","title":"Welcome","body":"Hello from Go backend"}})
})
http.ListenAndServe("127.0.0.1:8080", nil)
}
