class Solution(object):
        
    def transform_string(self, s):
        index_map = {}
        new_str = []        
        
        # enumerate returns an array with each index having the value and index location [ [0,'e'] , [1,'g']]
        for x, y in enumerate(s):
            #if 
            if y not in index_map:
                index_map[y] = x
                print(index_map)
            new_str.append(str(index_map[y]))
            
        return " ".join(new_str)
    
    
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        return self.transform_string(s) == self.transform_string(t)