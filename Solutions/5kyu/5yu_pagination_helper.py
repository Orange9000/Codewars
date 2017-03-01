# TODO: complete this class

class PaginationHelper:

  # The constructor takes in an array of items and a integer indicating
  # how many items fit within a single page
  def __init__(self, coll, items):
      self.items = items
      self.coll  = coll
      self.paged = [coll[i:i+items] for i in range(0, len(coll)+1, items)]
  
  # returns the number of items within the entire collection
  def item_count(self):
      return len(self.coll)    
  
  # returns the number of pages
  def page_count(self):
      return len(self.paged)
	
  # returns the number of items on the current page. page_index is zero based
  # this method should return -1 for page_index values that are out of range
  def page_item_count(self, page_index):
      if page_index < 0: return -1
      try:
          return len(self.paged[page_index])
      except:
          return -1
  
  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(self,item_index):
      if item_index > len(self.coll) - 1 or item_index < 0:
          return -1
      return 0 if item_index < self.items else item_index // self.items
